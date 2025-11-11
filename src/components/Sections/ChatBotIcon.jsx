import { useState } from "react";
import { MessageCircle, X } from "lucide-react"; // lucide-react gives beautiful icons

export default function ChatBotIcon() {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="p-4 text-gray-700 h-64 overflow-y-auto bg-gray-50">
            <p className="text-sm opacity-80">👋 Hi there! How can I help you today?</p>
            {/* You can integrate your chat messages or iframe here */}
          </div>

          {/* Input Section */}
          <div className="border-t border-gray-200 flex items-center p-2 bg-white">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              className="ml-2 px-3 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
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
    