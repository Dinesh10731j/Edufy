"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gray-50 pt-28">
        <div className="text-center">
          {/* Custom Not Found Image with Framer Motion */}
          <motion.div
            className="mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-48 h-48 mx-auto text-gray-300"
              fill="currentColor"
            >
              <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.468-200-200S145.468 56 256 56s200 89.468 200 200-89.468 200-200 200zm-60.003-129.745l-56-56a12 12 0 010-17l17-17a12 12 0 0117 0l39 39 87-87a12 12 0 0117 0l17 17a12 12 0 010 17l-104 104a12 12 0 01-17 0l-27-27z" />
            </svg>
          </motion.div>
          <motion.h1
            className="text-6xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            404
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </motion.p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Go to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
