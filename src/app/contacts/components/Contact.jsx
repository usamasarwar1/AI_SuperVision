"use client";
import React from "react";
import { Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Image from "next/image";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto px-4 p-6 md:p-0">
      <div className="flex flex-col lg:flex-row gap-8 md:p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-2/3 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[30px]">
            {/* Full Name */}
            <div>
              <label
                className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5] mb-[6px] md:mb-3"
                htmlFor="name"
              >
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Full Name"
                {...register("name", { required: "Full Name is required" })}
                classNames={{
                  inputWrapper:
                    "mt-[2px] md:mt-2 bg-[#1b1f23cc] rounded-[75px] px-[20px] py-[18px] h-[60px] border-[#ffffff1a] text-[#989898]",
                }}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5] mb-[6px] md:mb-3"
                htmlFor="email"
              >
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
                classNames={{
                  inputWrapper:
                    "mt-[2px] md:mt-2 bg-[#1b1f23cc] rounded-[75px] px-[20px] py-[18px] h-[60px] border-[#ffffff1a] text-[#989898]",
                }}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5] mb-[6px] md:mb-3"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                classNames={{
                  inputWrapper:
                    "mt-[2px] md:mt-2 bg-[#1b1f23cc] rounded-[75px] px-[20px] py-[18px] h-[60px] border-[#ffffff1a] text-[#989898]",
                }}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Country */}
            <div>
              <label
                className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5] mb-[6px] md:mb-3"
                htmlFor="country"
              >
                Country
              </label>
              <Input
                id="country"
                type="text"
                placeholder="Country"
                {...register("country", { required: "Country is required" })}
                classNames={{
                  inputWrapper:
                    "mt-[2px] md:mt-2 bg-[#1b1f23cc] rounded-[75px] px-[20px] py-[18px] h-[60px] border-[#ffffff1a] text-[#989898]",
                }}
              />
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>

            {/* Project Scope */}
            <div>
              <label
                className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5]  md:mb-3"
                htmlFor="project"
              >
                Select Project Scope
              </label>
              <div className="relative">
                <select
                  id="project"
                  className="mt-[2px] md:mt-2 bg-[#1b1f23cc] rounded-[75px] px-[20px] py-[18px] text-[#989898] border-[#ffffff1a] w-full appearance-none pr-10"
                  {...register("project", {
                    required: "Please select a project scope",
                  })}
                >
                  <option value="">Select Project Scope</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-4 top-1 flex items-center">
                  <svg
                    className="w-4 h-4 text-[#989898]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {errors.project && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.project.message}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label
                className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5] mb-[6px] md:mb-3"
                htmlFor="company"
              >
                Company Name
              </label>
              <Input
                id="company"
                type="text"
                placeholder="Company Name"
                {...register("company", {
                  required: "Company Name is required",
                })}
                classNames={{
                  inputWrapper:
                    "mt-[2px] md:mt-2 bg-[#1b1f23cc] rounded-[75px] px-[24px] py-[19px] h-[60px] border-[#ffffff1a] text-[#989898]",
                }}
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.company.message}
                </p>
              )}
            </div>
          </div>

          {/* Project Goals */}
          <div className="text-area">
            <label
              className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5]"
              htmlFor="comments"
            >
              Briefly describe your project goals and requirements
            </label>
            <Textarea
              id="comments"
              placeholder="Add comments..."
              {...register("comments", {
                required: "Project description is required",
                minLength: {
                  value: 20,
                  message: "Description should be at least 20 characters long",
                },
              })}
              classNames={{
                inputWrapper:
                  "mt-[2px] md:mt-2 bg-[#1b1f23cc] px-[24px] py-[19px] text-[13px] min-h-[100px] border-[1px] border-[#ffffff1a] text-[#989898] font-normal",
              }}
            />
            {errors.comments && (
              <p className="text-red-500 text-xs mt-1">
                {errors.comments.message}
              </p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div>
            <label className="flex items-center text-white gap-[7px]">
              <input
                type="checkbox"
                className="mr-2"
                {...register("terms", {
                  required: "You must agree to the terms",
                })}
              />
              <span className="poppins-regular text-[#DEDEDE] text-[12px] md:text-[16px] md:leading-7">
                {" "}
                I agree to the terms and conditions{" "}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M12 22.6914C6.47715 22.6914 2 18.2142 2 12.6914C2 7.16856 6.47715 2.69141 12 2.69141C17.5228 2.69141 22 7.16856 22 12.6914C22 18.2142 17.5228 22.6914 12 22.6914ZM12 20.6914C16.4183 20.6914 20 17.1097 20 12.6914C20 8.27313 16.4183 4.69141 12 4.69141C7.58172 4.69141 4 8.27313 4 12.6914C4 17.1097 7.58172 20.6914 12 20.6914ZM11 7.69141H13V9.69141H11V7.69141ZM11 11.6914H13V17.6914H11V11.6914Z"
                  fill="#515C69"
                />
              </svg>
            </label>
            {errors.terms && (
              <p className="text-red-500 text-xs mt-1">
                {errors.terms.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="public-sans border border-[#FFF] text-white rounded-full p-[6px_12px] md:px-6 md:py-3 hover:bg-white hover:text-black transition-colors"
          >
            Submit
          </button>
        </form>

        {/* Right Sidebar */}
        <div className="w-full lg:w-1/3">
          <h1 className="poppins-medium text-sm md:text-[16px] text-[#DEDEDE] leading-[20px]">
            Reach Out to Us
          </h1>
          <p className="public-sans text-[#B8B9BA] leading-4 md:leading-[27px] text-[12px] md:text-[16px] mt-1 md:mt-0">
            Contact us today to learn how we can support your business.
          </p>
          <form
            
            className="flex flex-col md:flex-row md:gap-12 md:w-full gap-4 lg:flex-col lg:gap-4 mt-[30px]"
          >
            {/* Phone */}
            <div className="relative w-full">
              <label
                className="public-sans leading-6 text-[#B8B9BA] text-[12px] md:text-[16px]"
                htmlFor="sidebar-phone"
              >
                Phone
              </label>
              <Input
                id="sidebar-phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
              
                classNames={{
                  inputWrapper:
                    "placeholder-style bg-transparent border-none px-[24px] py-[19px] h-[60px] text-[#989898] placeholder:text-[#989898] focus:outline-none",
                  input: "placeholder-style",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-input-gradient"></div>
              
            </div>

            {/* Email Address */}
            <div className="relative w-full">
              <label
                className="public-sans leading-6 text-[#B8B9BA] text-[12px] md:text-[16px]"
                htmlFor="sidebar-email"
              >
                Email Address
              </label>
              <Input
                id="sidebar-email"
                type="email"
                placeholder="contact@aisupervision.com"
                
                classNames={{
                  inputWrapper:
                    "placeholder-style bg-transparent border-none px-[24px] py-[19px] h-[60px] text-[#989898] placeholder:text-[#989898] focus:outline-none",
                  input: "placeholder-style",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-input-gradient"></div>
             
            </div>
          </form>
          <div className="space-y-2 mt-4">
            <p className="public-sans-regular text-[#B8B9BA] text-[12px] md:text-[16px]">
              Address
            </p>
            <h2 className="poppins-medium text-[15px] md:text-xl leading-[130%] text-[#DEDEDE]">
              123 Innovation Avenue, Suite 500, Tech City, TX 75001
            </h2>
          </div>
          <div className="relative w-full pt-[60%] mt-[57px]">
            <Image
              src="/images/map.png"
              alt="map"
              fill
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
