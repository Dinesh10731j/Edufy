"use client";

import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { UseStartLive } from "@/hooks/useStartLive";

const socket = io("http://localhost:1080");

const LiveStream = () => {
  const { mutate: startLive, isPending: isStarting } = UseStartLive();
  const [isLive, setIsLive] = useState(false);
  const [viewers, setViewers] = useState(0);
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const streamId = "course-123";
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    socket.on("update-streams", (streams) => {
      setViewers(streams[streamId]?.viewers || 0);
    });

    socket.on("receive-message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("update-streams");
      socket.off("receive-message");
    };
  }, []);

  const startStream = async () => {
    try {
      startLive(undefined, {
        onSuccess: async () => {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          setIsLive(true);
          socket.emit("start-stream", streamId);
        },
        onError: (error) => {
          console.error("Error starting live stream:", error);
        },
      });
    } catch (error) {
      console.error("Error accessing camera/microphone:", error);
    }
  };

  const endStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsLive(false);
    socket.emit("end-stream", streamId);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Live Stream</h1>

      
      <div className="w-full h-[90vh] bg-black rounded-lg overflow-hidden mb-4 flex items-center justify-center text-white">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-full object-cover"
          hidden={!isLive}
        />
        {!isLive && <span className="text-3xl">Video Placeholder</span>}
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-700">👀 Viewers: {viewers}</span>
        {isLive ? (
          <button onClick={endStream} className="px-4 py-2 bg-red-500 text-white rounded-lg">
            ⏹ End Live
          </button>
        ) : (
          <button
            onClick={startStream}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            disabled={isStarting}
          >
            ▶ Go Live
          </button>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2">Live Chat</h2>
        <div className="h-40 overflow-y-auto border p-2">
          {messages.map((msg, index) => (
            <div key={index} className="text-sm">
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
