import { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatBotIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "👋 Hi there! How can I help you today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  // Predefined responses
  const botResponses = {
    "hi": "Hello! Good morning! 😊 How are you doing today?",
    "hello": "Hi there! Lovely day, isn't it? ☀️",
    "good morning": "Good morning! Hope you're having a wonderful day! 🌞",
    "how are you": "I'm doing great, thank you for asking! How can I assist you today?",
    "what is your name": "I'm Anand AI Assistant! I'm here to help you with any questions.",
    "thank you": "You're welcome! Is there anything else I can help you with?",
    "bye": "Goodbye! Have a wonderful day! 👋",
    "default": "I'm not sure I understand. Could you try asking differently? I can help with general questions!"
  };

  // Auto-scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputText,
      isBot: false
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText("");

    // Simulate bot thinking delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputText.toLowerCase());
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (userInput) => {
    // Check for exact matches first
    for (const [key, response] of Object.entries(botResponses)) {
      if (userInput.includes(key)) {
        return response;
      }
    }
    
    // Check for common greetings
    if (userInput.includes("hi") || userInput.includes("hey")) {
      return botResponses["hi"];
    }
    
    // Default response
    return botResponses["default"];
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full 
                   bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition-all duration-300 
                   focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Open chat bot"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window (popup) */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-5 w-[85vw] sm:w-80 md:w-96 bg-white rounded-2xl shadow-2xl 
                     border border-gray-200 overflow-hidden z-50 animate-fade-in-up"
        >
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <h2 className="font-semibold text-sm sm:text-base">Anand AI Assistant</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 h-64 overflow-y-auto bg-gray-50">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                      message.isBot
                        ? "bg-white text-gray-700 border border-gray-200 rounded-tl-none"
                        : "bg-blue-600 text-white rounded-br-none"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Section */}
          <div className="border-t border-gray-200 flex items-center p-3 bg-white">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="ml-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}