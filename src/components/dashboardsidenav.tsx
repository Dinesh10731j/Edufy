"use client"
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  PlusCircle,
  Video,
  Menu,
  X,
} from "lucide-react";

interface DashboardSidenavProps {
    children?: React.ReactNode;
  }

const DashboardSidenav:React.FC<DashboardSidenavProps> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-[#1E88E5] text-gray-100 min-h-screen transition-all duration-300  lg:relative`}
      >
        {/* Logo and Toggle Button */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
       <Link href={'/'}>  <h1 className="text-xl font-bold">{isOpen ? "Edufy" : "E"}</h1></Link> 
          <button
            onClick={toggleSidebar}
            className=" hidden md:block lg:block text-white hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="mt-5 space-y-4">
          <Link
            href="/dashboard/browse_courses"
            className={`flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 transition rounded-md
              ${pathname === '/dashboard/browse_courses'?'bg-gray-700':''}
              `}
          >
            <BookOpen size={20} />
            {isOpen && <span>Browse Courses</span>}
          </Link>
          <Link
            href="/dashboard/create_course"
            className={`flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 transition rounded-md
              ${pathname === '/dashboard/create_course' ? 'bg-gray-700':''}
              `}
          >
            <PlusCircle size={20} />
            {isOpen && <span>Create Courses</span>}
          </Link>
          <Link
            href="/dashboard/live_stream"
            className={`flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 transition rounded-md
              ${pathname === '/dashboard/live_stream'?'bg-gray-700':''}
              `}
          >
            <Video size={20} />
            {isOpen && <span>Live Stream</span>}
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-grow items-center justify-center ml-$
          {isOpen ? "64" : "20"} bg-gray-100 min-h-screen p-6 transition-all duration-300`}
      >
       {children}
      </div>
    </div>
  );
};

export default DashboardSidenav;
