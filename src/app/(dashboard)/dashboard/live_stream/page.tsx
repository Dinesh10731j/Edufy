"use client";
import React from 'react';
const LiveStream = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-gray-800">Live Stream</h1>

        {/* Video Section */}
        <div className="w-full bg-black aspect-video rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-center w-full h-full text-white text-lg md:text-xl">
            Video Placeholder
          </div>
        </div>

        {/* Chat Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Comments */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Live Chat</h2>
            <div className="h-60 overflow-y-auto mb-4">
              {/* Placeholder messages */}
              <div className="mb-2">
                <span className="font-bold">User1:</span> Hello!
              </div>
              <div className="mb-2">
                <span className="font-bold">User2:</span> Excited for this session!
              </div>
              <div className="mb-2">
                <span className="font-bold">User3:</span> Can you explain the last part again?
              </div>
            </div>
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Info Section */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Session Info</h2>
            <ul className="text-sm text-gray-600">
              <li><strong>Title:</strong> Learn React Basics</li>
              <li><strong>Host:</strong> Suresh</li>
              <li><strong>Duration:</strong> 1 Hour</li>
              <li><strong>Time:</strong> 3:00 PM - 4:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Go Live Button */}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Go Live
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
