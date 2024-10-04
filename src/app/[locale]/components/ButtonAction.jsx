"use client";
import React from "react";

const ButtonAction = ({ commonClasses }) => {
  // // Phone Number Action Button
  // const simulateCall = (phoneNumber) =>
  //   window.open(`tel:${phoneNumber}`, "_self");
  // const callHandler = () => {
  //   simulateCall("+1 (555) 123-4567");
  // };

  // Email Action Button
  const simulateEmail = (emailAddress) =>
    window.open(`mailto:${emailAddress}`, "_self");
  const emailHandler = () => {
    simulateEmail("info@yourbusinessname.com");
  };
  return (
    <ul className="flex flex-col gap-4">
      <li className={commonClasses} onClick={emailHandler}>
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
        info@yourbusinessname.com
      </li>
      {/* <li onClick={callHandler} className={commonClasses}>
        <span className="mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
          >
            <path
              d="M2.77762 11.624C1.8296 9.97095 1.37185 8.62112 1.09584 7.25285C0.687622 5.22922 1.62181 3.25245 3.16938 1.99111C3.82345 1.45802 4.57323 1.64016 4.96 2.33404L5.83318 3.90055C6.52529 5.14221 6.87134 5.76303 6.8027 6.42123C6.73407 7.07943 6.26737 7.6155 5.33397 8.68765L2.77762 11.624ZM2.77762 11.624C4.69651 14.9699 7.70784 17.9829 11.0576 19.904M11.0576 19.904C12.7107 20.852 14.0605 21.3098 15.4288 21.5858C17.4524 21.994 19.4292 21.0598 20.6905 19.5123C21.2236 18.8582 21.0415 18.1084 20.3476 17.7216L18.7811 16.8485C17.5394 16.1564 16.9186 15.8103 16.2604 15.8789C15.6022 15.9476 15.0661 16.4143 13.994 17.3477L11.0576 19.904Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M13 6.51349C14.4232 7.11788 15.5638 8.25841 16.1682 9.68164M13.654 1.68164C17.1912 2.7024 19.9791 5.49016 21 9.02727"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
        +1 (555) 123-4567
      </li> */}
     
    </ul>
  );
};

export default ButtonAction;
