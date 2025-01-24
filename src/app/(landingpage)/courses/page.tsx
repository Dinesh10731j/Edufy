'use client';

import React from 'react';
import { ShoppingCart, Video, BookOpen, PlusCircle } from 'lucide-react'; // Lucide icons
import Header from '@/components/Header';
import Footer from '@/components/footer';
import Image from 'next/image';
import courseImage from "@/assets/images/course.jpg";

const CoursePage = () => {
  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 pt-28">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600">Explore Courses</h1>
          <p className="text-gray-600 mt-2">
            Buy, sell, or live stream courses on Eudify to share knowledge and learn together!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            <PlusCircle className="w-5 h-5" />
            Create a Course
          </button>
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            <BookOpen className="w-5 h-5" />
            Browse Courses
          </button>
          <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md">
            <Video className="w-5 h-5" />
            Start Live Teaching
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Example Course Card */}
          {[1, 2, 3, 4, 5, 6].map((course, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={courseImage}
                alt="Course thumbnail"
                className="w-full h-40 object-cover"
                height={300}
                width={300}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Course Title {index + 1}
                </h2>
                <p className="text-gray-600 mt-2">
                  Learn something amazing with this course. Perfect for beginners and pros alike.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">$49.99</span>
                  <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    <ShoppingCart className="w-5 h-5" />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CoursePage;
