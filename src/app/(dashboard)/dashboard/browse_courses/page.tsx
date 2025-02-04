"use client"
import React, { useState } from "react";
import { BrowseCoursesType } from "@/utils/types";
import { browseCourses } from "@/utils/browserCourses";
import dummyImage from "@/assets/images/signup.jpg"
import Image from "next/image";
const BrowseCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter courses based on search term
  const filteredCourses = browseCourses.filter((course: BrowseCoursesType) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Courses</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course: BrowseCoursesType) => (
            <div key={course.id} className="border rounded-lg p-4 shadow-lg bg-white">
              {/* Course Image */}
              <Image
                src={dummyImage}
                alt={course.title}
                className="w-full h-40 object-cover rounded-md mb-3"
                
              />

              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="text-gray-600">Instructor: {course.instructor}</p>
              <p className="text-gray-500">Category: {course.category}</p>
              <p className="text-green-600 font-semibold">Price: NPR {course.price}</p>

              {course.livestream.isLive ? (
                <a
                 // href={course.livestream.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-white bg-red-500 px-4 py-2 rounded-md"
                >
                  🔴 Live Now
                </a>
              ) : (
                <p className="text-gray-400">
                  Next Live: {new Date(course.livestream.schedule).toLocaleString()}
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No courses found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseCourses;
