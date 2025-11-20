import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ScrollingNotice = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  const notifications = [
    `Note: The spellings used in this application are intentional and reflect our team's unique sentiment and creative expression. They are not errors but part of our chosen style and identity.`,
  ];

  const closeNotice = () => {
    setIsVisible(false);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Auto-close after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-navy text-white py-3 overflow-hidden border-b-2 border-yellow-400/30 shadow-lg">
      {/* Control Buttons */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 flex gap-2">
        <button
          onClick={togglePause}
          className="bg-white/20 hover:bg-white/30 rounded-full w-6 h-6 flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm"
          aria-label={isPaused ? "Play animation" : "Pause animation"}
        >
          {isPaused ? (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          ) : (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6zm8 0h4v16h-4z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Close Button */}
      <button
        onClick={closeNotice}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full w-6 h-6 flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm"
        aria-label="Close notification"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Scrolling Content with Framer Motion */}
      <motion.div
        ref={scrollRef}
        className="flex whitespace-nowrap"
        animate={{ 
          x: isPaused ? 0 : ["0%", "-25%"] 
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Quadruple the content for seamless looping */}
        {[...notifications, ...notifications, ...notifications, ...notifications].map((message, index) => (
          <div
            key={index}
            className="inline-flex items-center mx-8 text-sm md:text-base font-medium hover:text-yellow-300 transition-colors duration-200"
          >
            <span className="mr-2 text-yellow-300">📢</span>
            {message}
            <span className="mx-4 text-white/30">•</span>
          </div>
        ))}
      </motion.div>

      {/* Gradient fade effects on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-800 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy to-transparent z-10"></div>
    </div>
  );
};

export default ScrollingNotice;