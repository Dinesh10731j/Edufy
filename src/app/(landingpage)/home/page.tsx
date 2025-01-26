"use client"
import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import femaleStudent from "@/assets/images/femalStudent.jpg";
import maleStudent from "@/assets/images/maleStudent.jpg";
import Achievement from "@/components/achievement";
import { Star, BookOpen, GraduationCap, PenTool, Globe } from "lucide-react"; 
import StudentReview from "@/components/review";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <>
      <Header />
      <section className="relative bg-[#FAF8F3] px-6 lg:px-20 py-12 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#1F2937] mb-6 leading-tight">
              Empower Your Learning with Edufy
            </h1>
            <p className="text-lg lg:text-xl text-[#6B7280] mb-8 leading-relaxed">
              Advance your career with access to 5,000+ courses and professional certifications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-6 py-3 bg-[#4F46E5] text-white rounded-xl shadow-lg hover:bg-[#4338CA] transition-all">
                Join for Free
              </button>
              <button className="px-6 py-3 bg-white text-[#4F46E5] border border-[#4F46E5] rounded-xl shadow-lg hover:bg-[#EEF2FF] transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center">
            <div className="relative grid grid-cols-2 gap-4 items-center">
              <Image
                src={femaleStudent}
                alt="Female Student Learning"
                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-lg transform rotate-[-5deg] hover:rotate-0 transition-all duration-300"
                width={400}
                height={400}
                priority
              />
              <Image
                src={maleStudent}
                alt="Male Student Engaged in Learning"
                className="w-full max-w-sm lg:max-w-md rounded-2xl shadow-lg transform rotate-[5deg] hover:rotate-0 transition-all duration-300"
                width={350}
                height={350}
              />
            </div>

            {/* Animated Decorative Icons */}
            <div className="absolute top-8 right-8 animate-bounce">
              <BookOpen className="w-10 h-10 text-yellow-500 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-12 -left-8 animate-float">
              <GraduationCap className="w-10 h-10 text-blue-500 drop-shadow-lg" />
            </div>
            <div className="absolute top-16 left-10 animate-spin-slow">
              <Globe className="w-10 h-10 text-red-500 drop-shadow-lg" />
            </div>
            <div className="absolute bottom-20 right-12 flex items-center space-x-2">
              <PenTool className="w-10 h-10 text-green-500 drop-shadow-lg animate-pen-move" />
              <span className="text-xl font-bold text-[#1F2937] animate-text-write">Edufy</span>
            </div>

            {/* Decorative Icon */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 animate-pulse">
              <Star className="w-8 h-8 text-yellow-500 drop-shadow-lg" />
            </div>
          </div>
        </div>

        {/* Achievement Section */}
        <section className="mt-16">
          <Achievement />
        </section>

        {/* Student Review Section */}
        <section className="mt-16">
          <StudentReview />
        </section>
      </section>

      <Footer />

      {/* Tailwind Animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pen-move {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes text-write {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pen-move {
          animation: pen-move 2s ease-in-out infinite;
        }

        .animate-text-write {
          animation: text-write 3s steps(10, end) infinite;
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default Home;