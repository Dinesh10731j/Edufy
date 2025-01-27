"use client";

import React from "react";
import { Users, Video, ShoppingCart, DollarSign } from "lucide-react";
import aboutImage from '@/assets/images/about.jpg';
import Image from 'next/image';
import Header from "@/components/Header";
import Footer from "@/components/footer";
const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 pt-24">
        <section className="grid lg:grid-cols-2 items-center gap-8 mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-blue-600">About Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              Edufy is an innovative online teaching platform where users can buy, sell, and teach courses, as well as conduct live streaming sessions to educate students worldwide. Established in 2023, Edufy aims to make learning new skills easier and more accessible for everyone.
            </p>
          </div>
          <Image src={aboutImage} alt="About Edufy" className="w-full rounded-lg" />
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <Users className="w-12 h-12 text-blue-600 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Community of Educators</h3>
              <p className="text-gray-600">
                Join a vibrant community of educators and learners collaborating to share knowledge and skills.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <Video className="w-12 h-12 text-blue-600 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Live Streaming</h3>
              <p className="text-gray-600">
                Conduct live streaming sessions to engage with students in real-time, enhancing the learning experience.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <ShoppingCart className="w-12 h-12 text-blue-600 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Buy and Sell Courses</h3>
              <p className="text-gray-600">
                Purchase courses to learn new skills or sell your own courses to a global audience.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <DollarSign className="w-12 h-12 text-blue-600 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Monetize Your Knowledge</h3>
              <p className="text-gray-600">
                Earn income by sharing your expertise and teaching students from around the world.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-600">
            At Edufy, we believe that knowledge should be universally accessible and empowering. By continuously improving our platform, we strive to help educators and learners achieve their goals and make education a transformative experience.
          </p>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default About;
