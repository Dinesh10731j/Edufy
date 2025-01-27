"use client"
import React from 'react';
import { PenTool, Layers, Palette, Ruler } from 'lucide-react';
const Design = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 px-4 py-8 md:px-12 bg-gray-50 pt-28">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-600mb-6">Design Courses</h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Dive into the world of UI/UX design with courses that help you master tools like Figma, Adobe XD, and more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <PenTool className="text-blue-600 w-8 h-8 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">Figma Mastery</h2>
              </div>
              <p className="text-gray-600">
                Learn how to design intuitive interfaces and prototypes using Figma, the industry-leading design tool.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <Layers className="text-green-600 w-8 h-8 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">UI/UX Fundamentals</h2>
              </div>
              <p className="text-gray-600">
                Understand the principles of user interface and user experience design to create user-friendly applications.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <Palette className="text-purple-600 w-8 h-8 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">Color Theory</h2>
              </div>
              <p className="text-gray-600">
                Master the art of choosing the right colors to create visually appealing designs.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <Ruler className="text-yellow-600 w-8 h-8 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">Responsive Design</h2>
              </div>
              <p className="text-gray-600">
                Learn how to design applications that look great on all devices and screen sizes.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Design;
