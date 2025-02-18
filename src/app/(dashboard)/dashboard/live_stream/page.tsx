"use client";

import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { UseStartLive } from "@/hooks/useStartLive";
import { UseEndLiveStream } from "@/hooks/useEndLive";
import { Peer } from "peerjs";
import { Video, Eye, Play, StopCircle, Mic, MicOff, VideoOff, Video as VideoIcon, Send } from "lucide-react";

const socket = io("http://localhost:1080");

const LiveStream = () => {
  const { mutate: startLive, isPending: isStarting } = UseStartLive();
  const { mutate: endLive, isPending: isEnding } = UseEndLiveStream();
  const [isLive, setIsLive] = useState(false);
  const [viewers, setViewers] = useState(0);
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const streamId = "course-123";
  const videoRef = useRef<HTMLVideoElement>(null);
  const peerRef = useRef<Peer | null>(null);
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

  const handleStartStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;

      const peer = new Peer();
      peerRef.current = peer;

      peer.on("open", (id) => {
        socket.emit("start-stream", { streamId, peerId: id });
      });

      peer.on("call", (call) => {
        call.answer(stream);
      });

      startLive(undefined, {
        onSuccess: () => console.log("Live stream started successfully"),
        onError: (error) => console.error("Error starting live stream:", error),
      });

      setIsLive(true);
    } catch (error) {
      console.error("Error starting stream:", error);
    }
  };

  const handleEndStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    if (peerRef.current) {
      peerRef.current.destroy();
      peerRef.current = null;
    }

    socket.emit("end-stream", streamId);

    endLive(undefined, {
      onSuccess: () => {
        console.log("Live stream ended successfully");
        setIsLive(false);
      },
      onError: (error) => {
        console.error("Error ending live stream:", error);
      },
    });
  };

  const toggleAudio = () => {
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach(track => (track.enabled = !track.enabled));
      setAudioEnabled(prev => !prev);
    }
  };

  const toggleVideo = () => {
    if (streamRef.current) {
      streamRef.current.getVideoTracks().forEach(track => (track.enabled = !track.enabled));
      setVideoEnabled(prev => !prev);
    }
  };

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      socket.emit("send-message", { user: "Host", text: newMessage });
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center flex items-center justify-center">
        <Video className="mr-2" /> Live Stream
      </h1>

      <div className="w-full h-[90vh] bg-black rounded-lg overflow-hidden mb-4 flex items-center justify-center text-white relative">
        <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" hidden={!isLive} />
        {!isLive && (
          <div className="absolute flex flex-col items-center text-center">
            <VideoIcon size={64} />
            <span className="text-xl mt-2">No Live Stream Available</span>
          </div>
        )}
      </div>

      <div className="flex  justify-between items-center mb-4">
  <span className="text-gray-700 items-center">
    <Eye className="mr-2" /> {viewers} 
  </span>
  <div className="flex flex-wrap gap-4 justify-center w-full">
    <button
      onClick={toggleAudio}
      className="px-4 py-2 bg-gray-500 text-white rounded-lg flex items-center w-full sm:w-auto"
    >
      {audioEnabled ? <Mic className="mr-2" /> : <MicOff className="mr-2" />}{" "}
      {audioEnabled ? "Mute" : "Unmute"}
    </button>

    <button
      onClick={toggleVideo}
      className="px-4 py-2 bg-gray-500 text-white rounded-lg flex items-center w-full sm:w-auto"
    >
      {videoEnabled ? <Video className="mr-2" /> : <VideoOff className="mr-2" />}{" "}
      {videoEnabled ? "Turn Off Video" : "Turn On Video"}
    </button>

    {isLive ? (
      <button
        onClick={handleEndStream}
        className="px-4 py-2 bg-red-500 text-white rounded-lg flex items-center w-full sm:w-auto"
        disabled={isEnding}
      >
        <StopCircle className="mr-2" /> End Live
      </button>
    ) : (
      <button
        onClick={handleStartStream}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center w-full sm:w-auto"
        disabled={isStarting}
      >
        <Play className="mr-2" /> Go Live
      </button>
    )}
  </div>
</div>


      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="h-48 overflow-y-auto mb-4 border p-2 rounded">
          {messages.map((msg, index) => (
            <div key={index} className="mb-1 text-gray-800">
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="flex">
          <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className="flex-1 p-2 border rounded" placeholder="Type a message..." />
          <button onClick={sendMessage} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center">
            <Send className="mr-2" /> Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
