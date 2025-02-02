"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import femaleStudent from "@/assets/images/femalStudent.jpg";
import maleStudent from "@/assets/images/maleStudent.jpg";
import Achievement from "@/components/achievement";
import StudentReview from "@/components/review";
import Header from "@/components/Header";
import Footer from "@/components/footer";
const Home = () => {
  return (
    <>
      <Header />
      <section className="relative px-6 lg:px-20 py-12 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl text-blue-600 lg:text-6xl mt-12 font-bold text-[#1F2937] mb-6 leading-tight">
              Empower Your Learning with Edufy
            </h1>
            <p className="text-lg lg:text-xl text-[#6B7280] mb-8 leading-relaxed">
              Advance your career with access to 5,000+ courses and professional certifications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 bg-[#4F46E5] text-white rounded-xl shadow-lg"
              >
                Join for Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-3 bg-white text-[#4F46E5] border border-[#4F46E5] rounded-xl shadow-lg"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="relative grid grid-cols-2 gap-4 items-center">
              <motion.div
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="transform rotate-[-5deg]"
              >
                <Image
                  src={femaleStudent}
                  alt="Female Student Learning"
                  className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-lg mt-8"
                  width={400}
                  height={400}
                  priority
                />
              
              </motion.div>
              <motion.div
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="transform rotate-[5deg]"
              >
                <Image
                  src={maleStudent}
                  alt="Male Student Engaged in Learning"
                  className="w-full max-w-sm lg:max-w-md rounded-2xl shadow-lg"
                  width={350}
                  height={350}
                />
               
              </motion.div>
            </div>
          </motion.div>
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
    </>
  );
};

export default Home;
