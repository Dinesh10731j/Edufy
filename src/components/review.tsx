"use client";

import React from "react";
import { Star, User } from "lucide-react";
import { reviews } from "../../utils/reviews";


const StudentReview = () => {
  return (
    <section className="py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1F2937] mb-8">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className=" shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#E5E7EB] flex items-center justify-center mb-4">
                <User className="w-8 h-8 text-[#4F46E5]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                {review.name}
              </h3>
              <p className="text-[#6B7280] mb-4">{review.review}</p>
              <div className="flex justify-center gap-1">
                {Array(review.rating)
                  .fill(null)
                  .map((_, index) => (
                    <Star key={index} className="w-5 h-5 text-yellow-500" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentReview;
