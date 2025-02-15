"use client";
import React from "react";
import SignupImage from "@/assets/images/signup.jpg";
import { useForm } from "react-hook-form";
import { User, Lock, Mail } from "lucide-react";
import Image from "next/image";
import { SignupFormInputs } from "@/utils/types";
import { UseRegister } from "@/hooks/useSignup";
import Link from "next/link";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormInputs>();

const registerMutation = UseRegister();

  const onSubmit = (data: SignupFormInputs) => {
    registerMutation.mutate(data)
  };

  const password = watch("password", "");

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-8 items-center w-full max-w-4xl p-8 rounded-md">
          {/* Image Section */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <Image
              src={SignupImage}
              alt="Signup"
              height={500}
              width={400}
              className="rounded-md object-cover"
            />
          </div>
          {/* Form Section */}
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <div className="flex items-center border rounded-md px-3">
                  <User className="text-gray-500 mr-2" size={20} />
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="flex-1 p-2 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <div className="flex items-center border rounded-md px-3">
                  <Mail className="text-gray-500 mr-2" size={20} />
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="flex-1 p-2 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <div className="flex items-center border rounded-md px-3">
                  <Lock className="text-gray-500 mr-2" size={20} />
                  <input
                    id="password"
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    })}
                    className="flex-1 p-2 focus:outline-none"
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <div className="flex items-center border rounded-md px-3">
                  <Lock className="text-gray-500 mr-2" size={20} />
                  <input
                    id="confirmPassword"
                    type="password"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    className="flex-1 p-2 focus:outline-none"
                    placeholder="Confirm your password"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#FB8C00] text-white py-2 px-4 rounded-md hover:bg-[#FF9800] transition"
              >
                Sign Up
              </button>

              <p className="py-2 px-1 text-center">Allready have an account? <Link href="/user/login" className="text-[#FB8C00]">Login</Link></p>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default SignupPage;
