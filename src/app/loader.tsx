"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        {/* DNA Loader */}
        <div className="relative w-16 h-16">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-blue-500 rounded-full animate-spin"
              style={{
                transform: `rotate(${i * 60}deg) translateX(2.5rem)`,
                animationDelay: `${i * 0.1}s`,
              }}
            ></div>
          ))}
        </div>
        <style jsx>{`
          @keyframes spin {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(0.5);
              opacity: 0.5;
            }
          }
          .animate-spin {
            animation: spin 1.2s infinite ease-in-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Loading;
