"use client";
import React from 'react';
import { Briefcase, BarChart2, DollarSign, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/footer';

const Business = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-8 md:px-12 bg-gray-50 pt-28">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Business Courses</h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Unlock your entrepreneurial potential with courses that teach you how to manage businesses, analyze markets, and grow profits.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-600 w-8 h-8 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">Entrepreneurship</h2>
              </div>
              <p className="text-gray-600">
                Learn how to start, manage, and scale your business effectively.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <BarChart2 className="text-green-600 w-8 h-8 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">Market Analysis</h2>
              </div>
              <p className="text-gray-600">
                Understand market trends and make data-driven business decisions.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <DollarSign className="text-purple-600 w-8 h-8 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">Financial Management</h2>
              </div>
              <p className="text-gray-600">
                Master the art of managing finances to maximize profits and minimize risks.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                <Users className="text-yellow-600 w-8 h-8 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">Leadership & Teamwork</h2>
              </div>
              <p className="text-gray-600">
                Develop leadership skills to manage teams and drive organizational success.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Business;
