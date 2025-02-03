import React from 'react';
import { BrowseCoursesType } from '@/utils/types';
import { browseCourses } from '@/utils/browserCourses';
const BrowseCourses = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {browseCourses.map((course:BrowseCoursesType) => (
          <div key={course.id} className="border rounded-lg p-4 shadow-lg">
            <h2 className="text-lg font-semibold">{course.title}</h2>
            <p className="text-gray-600">Instructor: {course.instructor}</p>
            <p className="text-gray-500">Category: {course.category}</p>
            <p className="text-green-600 font-semibold">Price: NPR {course.price}</p>
            {course.livestream.isLive ? (
              <a
                //href={course.livestream.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-white bg-red-500 px-4 py-2 rounded-md"
              >
                🔴 Live Now
              </a>
            ) : (
              <p className="text-gray-400">Next Live: {new Date(course.livestream.schedule).toLocaleString()}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCourses;
