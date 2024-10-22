"use client";
import React from "react";

const ButtonAction = ({ commonClasses }) => {
  
  const simulateEmail = (emailAddress) =>
    window.open(`mailto:${emailAddress}`, "_self");
  const emailHandler = () => {
    simulateEmail("Support@aisupervision.org");
  };
  return (
    <ul className="flex flex-col gap-4">
      <li className={`${commonClasses} hover:text-blue-700 transition-all duration-1000 ease-out`} onClick={emailHandler}>
        <span className="mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
          >
            <path
              d="M1 3.68164L7.91302 7.59861C10.4616 9.04265 11.5384 9.04265 14.087 7.59861L21 3.68164"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M1.01577 11.1573C1.08114 14.2228 1.11383 15.7556 2.24496 16.891C3.37608 18.0264 4.95033 18.066 8.09883 18.1451C10.0393 18.1938 11.9607 18.1938 13.9012 18.1451C17.0497 18.066 18.6239 18.0264 19.7551 16.891C20.8862 15.7556 20.9189 14.2228 20.9842 11.1573C21.0053 10.1716 21.0053 9.19172 20.9842 8.20604C20.9189 5.1405 20.8862 3.60773 19.7551 2.4723C18.6239 1.33687 17.0497 1.29732 13.9012 1.21821C11.9607 1.16945 10.0393 1.16945 8.09882 1.2182C4.95033 1.2973 3.37608 1.33686 2.24495 2.47229C1.11382 3.60772 1.08114 5.14049 1.01576 8.20602C0.994745 9.19171 0.994745 10.1716 1.01577 11.1573Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      Support@aisupervision.org
      </li>
     
     
    </ul>
  );
};

export default ButtonAction;
