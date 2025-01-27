"use client";
import React from 'react';
import { Brain, CheckCircle, PieChart, TrendingUp } from 'lucide-react';
const DataScience = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 px-4 py-8 md:px-12 bg-gray-50 pt-28">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Data Science Courses</h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Explore a wide range of Data Science courses that help you master machine learning, data visualization, and predictive analytics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <Brain className="text-blue-600 w-8 h-8 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">Machine Learning</h2>
              </div>
              <p className="text-gray-600">
                Learn how to build intelligent systems with machine learning techniques and algorithms.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <PieChart className="text-green-600 w-8 h-8 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">Data Visualization</h2>
              </div>
              <p className="text-gray-600">
                Master the art of data storytelling by creating stunning visualizations.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <TrendingUp className="text-purple-600 w-8 h-8 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">Predictive Analytics</h2>
              </div>
              <p className="text-gray-600">
                Predict future trends and behaviors using advanced analytical techniques.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-yellow-600 w-8 h-8 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">Project-Based Learning</h2>
              </div>
              <p className="text-gray-600">
                Apply your knowledge to real-world projects and build a portfolio to showcase your skills.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DataScience;
