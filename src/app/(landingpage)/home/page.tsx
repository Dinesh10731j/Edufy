"use client";

import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import femaleStudent from "@/assets/images/femalStudent.jpg";
import maleStudent from "@/assets/images/maleStudent.jpg";
import Achievement from "@/components/achievement";
import { Star } from "lucide-react"; 
import StudentReview from "@/components/review";


const Home = () => {
  return (
    <>
      <Header />
      <section className="relative bg-[#FAF8F3] px-6  lg:px-20 py-12 lg:py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left lg:w-1/2 mt-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#1F2937] mb-6">
              Edufy Online Courses
            </h1>
            <p className="text-lg lg:text-xl text-[#6B7280] mb-6">
              Advance your career with more than 5,000 courses & Professional
              Certificates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-6 py-3 bg-[#4F46E5] text-white rounded-lg shadow-md hover:bg-[#4338CA]">
                Join for Free
              </button>
              <button className="px-6 py-3 bg-white text-[#4F46E5] border border-[#4F46E5] rounded-lg shadow-md hover:bg-[#EEF2FF]">
                Learn More
              </button>
            </div>
          </div>
          {/* Right Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative">
            <div className="relative">
              <Image
                src={femaleStudent}
                alt="Female Student"
                className="w-full max-w-md lg:max-w-lg z-10 rounded-full"
                width={400}
                height={400}
              />
              <Image
                src={maleStudent}
                alt="Male Student"
                className="absolute bottom-0 right-0 w-24 h-24 lg:w-32 lg:h-32 z-20 rounded-full shadow-md"
              />
            </div>

            {/* Decorative Shapes */}
            <div
              className="absolute -top-10 -right-7 w-16 h-16 bg-[#FDE68A] rounded-full shadow-[0_0_20px_5px_rgba(253,230,138,0.7)]"
            ></div>
            <div
              className="absolute bottom-10 -left-7 w-16 h-16 bg-[#4F46E5] rounded-full shadow-[0_0_20px_5px_rgba(79,70,229,0.7)]"
            ></div>
            <div
              className="absolute top-20 left-10 w-20 h-20 bg-[#34D399] rounded-full shadow-[0_0_25px_8px_rgba(52,211,153,0.6)]"
            ></div>
            <div
              className="absolute bottom-16 right-12 w-12 h-12 bg-[#EF4444] rounded-full shadow-[0_0_25px_8px_rgba(239,68,68,0.6)]"
            ></div>

            {/* Decorative Icon */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
              <Star className="w-8 h-8 text-yellow-500 drop-shadow-lg" />
            </div>
          </div>
        </div>

        {/* Achievement Section */}
        <section className="mt-12">
          <Achievement />
        </section>

        <section className="mt-12">
          <StudentReview/>
        </section>
      </section>
    </>
  );
};

export default Home;
