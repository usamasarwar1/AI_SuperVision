import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Input, Textarea } from "@nextui-org/react";
import { RxCross2 } from "react-icons/rx";
import SuccessMessage from "./SuccessMessage";

const SubmitModal = ({ showModal, setShowModal, selectDate, selectedTime }) => {
  const [formError, setFormError] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const maxLength = 40;

  const handleCommentChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setCommentValue(value);
    }
  };

  const onSubmit = async (data) => {

    const bookingData = {
      date: selectDate.format("MMMM D, YYYY"),
      time: selectDate.format('HH:mm:ss'),
      email: data.email,
      message: commentValue,
    };

    console.log("Booking", bookingData)
    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: "03f1fdc2-279e-4b86-ac2d-931d598422da",
        ...bookingData,
      });

      if (response.status === 200) {
        setModalOpen(true);
      } else {
        setFormError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormError("Error submitting the form.");
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-[#000432] bg-opacity-50 flex items-center justify-center mb-12${
          showModal ? "block backdrop-blur-[1px]" : "hidden"
        }`}
      >
        <div className="bg-[#050505] p-6 rounded-lg shadow-lg max-w-lg w-full">
          <div className="flex justify-end">
            <RxCross2
              className="text-white w-10 h-10 font-semibold cursor-pointer"
              onClick={() => setShowModal(false)}
            />
          </div>
          <h2 className="poppins-medium text-[#DEDEDE] text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 md:mb-5">
            Confirm Your Booking
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div>
              <label
                className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5] mb-[6px] md:mb-3"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: "Enter the Email",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Enter the valid Email",
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

            {/* Message Textarea */}
            <div className="text-area">
              <label
                className="text-[#B8B9BA] font-normal text-[12px] md:text-[16px] leading-[1.5]"
                htmlFor="comments"
              >
                Message
              </label>
              <Textarea
                id="comments"
                placeholder="Enter Message"
                {...register("comments", {
                  required: "Message is required",
                })}
                value={commentValue}
                onChange={handleCommentChange}
                classNames={{
                  inputWrapper:
                    "mt-[2px] md:mt-2 bg-[#1b1f23cc] px-[24px] py-[19px] text-[13px] min-h-[100px] border-[1px] border-[#ffffff1a] rounded-[15px]",
                }}
              />
              {commentValue.length === maxLength && (
                <p className="text-red-500 text-xs mt-1">
                  Maximum length reached ({maxLength} characters)
                </p>
              )}
            </div>

            {formError && <p className="text-red-500">{formError}</p>}
            {submissionMessage && (
              <p className="text-green-500">{submissionMessage}</p>
            )}

            <div className="flex justify-end gap-2 mt-4">
              <button
                type="submit"
                className="public-sans border border-[#FFF] text-white rounded-full p-[6px_12px] md:px-6 md:py-3 hover:bg-white hover:text-black transition-colors"
              >
                Submit
              </button>
              <button
                type="button"
                className="public-sans border border-[#FFF] text-white rounded-full p-[6px_12px] md:px-6 md:py-3 hover:bg-white hover:text-black transition-colors"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      {isModalOpen && (
        <SuccessMessage
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default SubmitModal;
