"use client";
import React from "react";
import { Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

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

            <div dir={dir}>
              <label
                className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5] mb-[6px] md:mb-3"
                htmlFor="name"
              >
                <span dir={dir}> {t("full_name_label")}</span>
                {/* {translations[language].full_name_label} */}
              </label>
              <Input
                id="name"
                type="text"
                placeholder={t("full_name_placeholder")}
                {...register("name", {
                  required: t("full_name_error"),
                })}
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
            <div dir={dir}>
              <label
                className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5] mb-[6px] md:mb-3"
                htmlFor="email"
              >
                {/* {translations[language].email_label} */}
                {t("email_label")}
              </label>
              <Input
                id="email"
                type="email"
                placeholder={t("email_placeholder")}
                {...register("email", {
                  required: t("email_error"),
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: t("invalid_email_error"),
                    // translations[language].invalid_email_error,
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
            <div dir={dir}>
              <label
                className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5] mb-[6px] md:mb-3"
                htmlFor="phone"
              >
                {t("phone_label")}
              </label>
              <Input
                dir={dir}
                id="phone"
                type="tel"
                placeholder={t("phone_placeholder")}
                {...register("phone", {
                  required: t("phone_error"),

                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: t("invalid_phone_error"),
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
            <div dir={dir}>
              <label
                className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5] mb-[6px] md:mb-3"
                htmlFor="country"
              >
                {t("country_label")}
              </label>
              <Input
                id="country"
                type="text"
                placeholder={t("country_placeholder")}
                {...register("country", {
                  required: t("country_error"),
                })}
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
            <div dir={dir}>
              <label
                className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5] md:mb-3"
                htmlFor="project"
              >
                {t("project_scope_label")}
                {/* {translations[language].project_scope_label} */}
              </label>
              <div className="relative">
                <select
                  id="project"
                  className="mt-[2px] md:mt-2 bg-[#1b1f23cc] rounded-[75px] px-[20px] py-[18px] text-[#989898] border-[#ffffff1a] w-full appearance-none pr-10"
                  {...register("project", {
                    required: t("project_scope_error"),
                  })}
                >
                  <option value="">{t("project_scope_placeholder")}</option>
                  <option value="Small">{t("project_scope_small")}</option>
                  <option value="Medium">{t("project_scope_medium")}</option>
                  <option value="Large">{t("project_scope_large")}</option>
                </select>
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
            <div dir={dir}>
              <label
                className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5] mb-[6px] md:mb-3"
                htmlFor="company"
              >
                {" "}
                {t("company_name_label")}
              </label>
              <Input
                id="company"
                type="text"
                placeholder={t("company_name_placeholder")}
                {...register("company", {
                  required: t("company_error"),
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
          <div className="text-area" dir={dir}>
            <label
              className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5]"
              htmlFor="comments"
            >
              {t("project_description_label")}
            </label>
            <Textarea
              id="comments"
              placeholder={t("project_description_placeholder")}
              {...register("comments", {
                required: t("description_error"),

                minLength: {
                  value: 20,
                  message: t("description_error"),
                },
              })}
              classNames={{
                inputWrapper:
                  "mt-[2px] md:mt-2 bg-[#1b1f23cc] px-[24px] py-[19px] text-[13px] min-h-[100px] border-[1px] border-[#ffffff1a] rounded-[15px]",
              }}
            />
            {errors.comments && (
              <p className="text-red-500 text-xs mt-1">
                {errors.comments.message}
              </p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div dir={dir}>
            <label className="flex items-center text-white gap-[7px]">
              <input
                type="checkbox"
                className="mr-2"
                {...register("terms", {
                  required: t("terms_conditions_error"),
                })}
              />
              <span className="poppins-regular text-[#DEDEDE] text-[12px] md:text-[16px] md:leading-7">
                {" "}
                {t("terms_and_conditions_label")}
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
          <div dir={dir}>
            <button
              type="submit"
              className="public-sans border border-[#FFF] text-white rounded-full p-[6px_12px] md:px-6 md:py-3 hover:bg-white hover:text-black transition-colors"
            >
              {t("submit_button")}
            </button>
          </div>
        </form>

        {/* Right Sidebar */}
        <div className="w-full lg:w-1/3 h-[50%]">
          <div className="relative w-full pt-[60%] ">
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
