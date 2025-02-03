"use client";
import React, { useState } from "react";
import { browseCourses } from "@/utils/browserCourses";

const LiveStream = () => {
  const [isLive, setIsLive] = useState(false);

  const liveCourse = browseCourses.find((course) => course.livestream.isLive);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          Live Stream
        </h1>

        {/* Video Section */}
        <div className="w-full bg-black aspect-video rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-center w-full h-full text-white text-lg md:text-xl">
            {isLive ? "🔴 Live Streaming" : "Video Placeholder"}
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
            {liveCourse ? (
              <ul className="text-sm text-gray-600">
                <li>
                  <strong>Title:</strong> {liveCourse.title}
                </li>
                <li>
                  <strong>Host:</strong> {liveCourse.instructor}
                </li>
                <li>
                  <strong>Category:</strong> {liveCourse.category}
                </li>
                <li>
                  <strong>Time:</strong>{" "}
                  {new Date(liveCourse.livestream.schedule).toLocaleString()}
                </li>
              </ul>
            ) : (
              <p className="text-gray-500">No active livestreams</p>
            )}
          </div>
        </div>

        {/* Go Live / See Livestream Button */}
        <div className="flex justify-center mt-6">
          {isLive && liveCourse ? (
            <a
              //href={liveCourse.livestream.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              🔴 See Livestream
            </a>
          ) : (
            <button
              onClick={() => setIsLive(true)}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Go Live
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
