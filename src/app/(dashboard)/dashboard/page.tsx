"use client";
import { motion } from "framer-motion";
import { Video, Book, DollarSign, Users, Bell } from "lucide-react";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const userStats = {
    totalEarnings: "$1,250",
    totalLives: 10,
    isLive: true,
    totalLikes: 340,
    totalComments: 120,
    coursesCreated: 3,
    coursesBought: ["React Mastery", "Node.js Fundamentals", "AI with Python"]
  };

  const engagementData = {
    labels: ["Likes", "Comments"],
    datasets: [
      {
        label: "Engagement",
        data: [userStats.totalLikes, userStats.totalComments],
        backgroundColor: ["#82ca9d", "#8884d8"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 5,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 50,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 5,
        borderSkipped: false,
        barThickness: 10, 
      },
    },
  };

  return (
    <div className="flex h-screen bg-[#1E88E5]">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="p-6 bg-white dark:bg-gray-800 shadow-md flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 text-gray-900 dark:text-white cursor-pointer" />
            <Users className="w-8 h-8 text-gray-900 dark:text-white" />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-2xl flex items-center space-x-4">
            <DollarSign className="w-10 h-10 text-yellow-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Total Earnings</h2>
              <p className="text-gray-500 dark:text-gray-400">{userStats.totalEarnings}</p>
            </div>
          </motion.div>

          <motion.div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-2xl flex items-center space-x-4">
            <Video className="w-10 h-10 text-red-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Live Sessions</h2>
              <p className="text-gray-500 dark:text-gray-400">{userStats.totalLives} sessions</p>
              <p className={`text-sm ${userStats.isLive ? 'text-green-500' : 'text-red-500'}`}>{userStats.isLive ? 'Live Now' : 'Offline'}</p>
            </div>
          </motion.div>

          <motion.div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-2xl flex items-center space-x-4">
            <Book className="w-10 h-10 text-green-500" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Courses</h2>
              <p className="text-gray-500 dark:text-gray-400">Created: {userStats.coursesCreated}</p>
              <p className="text-gray-500 dark:text-gray-400">Bought: {userStats.coursesBought.length}</p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {userStats.coursesBought.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </main>
        <motion.div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-2xl h-[400px] w-full">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Engagement</h2>
          <Bar data={engagementData} options={chartOptions} />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
