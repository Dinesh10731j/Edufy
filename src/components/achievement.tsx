"use client";

import React from "react";
import { Users, VideoIcon, Timer } from "lucide-react";

const Achievement = () => {
  return (
    <section className=" px-6 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-3xl lg:text-5xl font-bold text-blue-600 mb-8">
          Our Achievements
        </h2>
        <p className="text-lg lg:text-xl text-[#6B7280] mb-12">
          Join millions of learners from around the world advancing their skills.
        </p>

        {/* Achievements Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center  p-6 rounded-lg shadow-md">
            <Users className="text-[#4F46E5] w-12 h-12 mb-4" />
            <h3 className="text-3xl font-bold text-[#1F2937]">150K+</h3>
            <p className="text-lg text-[#6B7280]">Students Enrolled</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center  p-6 rounded-lg shadow-md">
            <VideoIcon className="text-[#F59E0B] w-12 h-12 mb-4" />
            <h3 className="text-3xl font-bold text-[#1F2937]">20+</h3>
            <p className="text-lg text-[#6B7280]">Lessons</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center  p-6 rounded-lg shadow-md">
            <Timer className="text-[#10B981] w-12 h-12 mb-4" />
            <h3 className="text-3xl font-bold text-[#1F2937]">10 Minutes</h3>
            <p className="text-lg text-[#6B7280]">Average Course Duration</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
