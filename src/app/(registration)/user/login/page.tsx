"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock } from "lucide-react";
import { LoginFormInputs } from "@/utils/types";
import { UseLogin } from "@/hooks/useLogin";
import Image from "next/image";
import LoginImage from "@/assets/images/login.jpg";
import Link from "next/link";
import Loader from "@/components/loader";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const loginMutation = UseLogin();

  const onSubmit = (data: LoginFormInputs) => {
    loginMutation.mutate(data);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-8 items-center w-full max-w-4xl p-8 rounded-md">
          {/* Image Section */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <Image
              src={LoginImage}
              alt="Login"
              height={500}
              width={400}
              className="rounded-md object-cover w-full md:w-auto"
            />
          </div>

          {/* Form Section */}
          <div className="w-full max-w-md bg-white rounded-md p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email Field */}
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
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="mb-6">
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
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#FB8C00] text-white py-2 px-4 rounded-md hover:bg-[#FF9800] transition"
              >
                {loginMutation.isPending ? (
                 <Loader/>
) : (
  "Login"
)}

              </button>
              <p className="text-center mt-4">
                Don&apos;t have an account?{" "}
                <Link href="/user/signup" className="text-[#FB8C00]">
                  Sign up
                </Link>
                </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
