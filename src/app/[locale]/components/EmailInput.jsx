"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {useLocale, useTranslations } from "next-intl";


const EmailInput = () => {
  const t = useTranslations("Home");
  const locale = useLocale();

const dir = locale === "ar" ? "rtl" : "ltr";

  const [successMessage, setSuccessMessage] = useState("");
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Function to send email
  const onSubmit = (data) => {
    emailjs
      .send(
        "service_oslagk5", //  EmailJS service ID
        "template_if3yf8d", // EmailJS template ID
        {
          user_email: data.email,
        },
        "bXdsdyCiVwOWLYeSj" //  public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Email sent successfully!");
          reset();
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the email. Please try again.");
        }
      );
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} dir={dir}>
      <div className="w-full flex flex-col gap-[26px] mb-4">
        <input
          type="email"
          placeholder={t("email_placeholde")}
          className="placeholder:poppins-regular poppins-regular bg-[#1b1f23cc] rounded-[75px] p-[9px_15px] md:px-[24px] md:py-[19px] text-[13px] flex-grow h-[46px] md:h-[60px] border-[1px]  border-[#ffffff1a] text-[#989898] font-normal hover:bg-[#1b1f23cc] focus:bg-[#1b1f23cc] " dir={dir}
          {...register("email", {
            required: t("eamil_error"),
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: t("invalid_email_error"),
            },
          })}
        />

        {errors.email && (
          <p className="text-red-500 poppins-regula">{errors.email.message}</p>
        )}
        {successMessage && (
          <p className="text-white poppins-regula">{successMessage}</p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="public-sans font-semibold relative rounded-full border-2 border-[#6185F2] bg-[#6185F2] p-[9px_15px] md:py-[13px] md:px-[26px] w-full lg:w-fit text-[#000] text-[1rem]" 
        >
        <span dir={dir}> {t("subscribe")}  <span>{t("now")}</span></span>
        </button>
      </div>
    </form>
  );
};

export default EmailInput;
