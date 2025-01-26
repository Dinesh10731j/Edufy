"use client";

import React from "react";
import { courses } from "@/utils/courses";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import { categories } from "@/utils/categories";
const WebDevelopment = () => {
  
  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen pt-28">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Web Development Courses
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Explore a variety of courses in web development and enhance your skills!
        </p>
        {categories.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {category.title}
            </h2>
            <p className="text-gray-600 mb-6">{category.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.courses.map((course, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="text-4xl mb-4">
                    {courses.find((c) => c.name === course)?.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    {course}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default WebDevelopment;
