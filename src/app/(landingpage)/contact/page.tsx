"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactFormInputs } from "@/utils/types";
import { UseContact } from "@/hooks/useContact";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import contactImage from "@/assets/images/contact.jpg";
import Image from "next/image";
import {Phone,Mail,Pin } from "lucide-react";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();

const contactMutation = UseContact();

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    contactMutation.mutate(data);
  };

  return (
    <>
    <Header/>
      <div className="container mx-auto p-4 h-full pt-28">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Let’s Get In Touch</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4 text-gray-700">
          <p className="flex items-center text-gray-700">
    <Phone className="text-blue-500 mr-2" /> +123 45 789 000
</p>
<p className="flex items-center text-gray-700">
    <Mail className="text-green-500 mr-2" /> inquiry@edufy.com
</p>
<p className="flex items-center text-gray-700">
    <Pin className="text-red-500 mr-2" /> 221b Elementary Street, New York, NY
</p>

            <Image src={contactImage} height={400} width={400} alt="contact_image" />
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Inquiry Purpose */}
              <div>
                <label className="block text-sm font-medium">Inquiry Purpose*</label>
                <select
                  {...register("inquiryPurpose", { required: "This field is required" })}
                  className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
                >
                  <option value="">Choose one option</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Support">Support</option>
                  <option value="Feedback">Feedback</option>
                </select>
                {errors.inquiryPurpose && (
                  <p className="text-red-500 text-sm">{errors.inquiryPurpose.message}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium">Description*</label>
                <select
                  {...register("description", { required: "This field is required" })}
                  className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
                >
                  <option value="">Choose one option</option>
                  <option value="Product Info">Product Info</option>
                  <option value="Pricing">Pricing</option>
                </select>
                {errors.description && (
                  <p className="text-red-500 text-sm">{errors.description.message}</p>
                )}
              </div>
            </div>

            {/* Full Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Full Name*</label>
                <input
                  {...register("fullName", { required: "Full name is required" })}
                  className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Email*</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Organization and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Organization</label>
                <input
                  {...register("organization")}
                  className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
                  placeholder="Enter your organization name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  {...register("phone")}
                  className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium">Message*</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
                placeholder="Enter your message"
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full  bg-[#4F46E5] text-white p-3 rounded hover:bg-[#4338CA] transition"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
