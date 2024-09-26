import React from "react";

const SuccessMessage = ({ isOpen, onClose, setShowModal }) => {
  const handleClosed = () => {
    setShowModal(false);
    onClose;
  };
  if (!isOpen) return null;
  return (
    <div>
      <div className="fixed inset-0 bg-[#000432] bg-opacity-50 flex items-center justify-center">
        <div className="bg-[#0B0B0B] p-6 rounded-lg shadow-lg max-w-[340px] w-full">
          <div className="flex flex-col items-center">
            <div className="bg-green-500 rounded-full p-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="poppins-medium text-[#DEDEDE] text-xl lg:text-2xl mb-3 lg:mb-[21.21px]">
              Awesome!
            </h2>
            <p className="poppins-medium text-[#DEDEDE] mt-2 text-center">
              Your Consultation has been confirmed. Check your email for
              details.
            </p>
            <button
              onClick={handleClosed}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
