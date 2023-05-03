import React from "react";
import { Link } from "react-router-dom";
import coverImage from "../../assets/homeCarousel/02.png";

import { HiFaceFrown } from "react-icons/hi2";

const ErrorMessage = () => {
  return (
    <div
      className="h-screen w-screen bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${coverImage})`,
      }}
    >
      <div className="  text-center">
        <h1 className="text-5xl font-bold pb-5  text-primary pt-24">
          Oops! 404 Error
        </h1>
        <p className="text-2xl  font-bold pb-5  text-primary">
          The page you are looking for could not be found.
        </p>
        <HiFaceFrown className="w-40 mx-auto h-40 text-primary " />
        <p className="text-lg pb-3 text-gray-300">
          Sorry, but the page you are looking for does not exist or has been
          moved.
        </p>
        <p className="text-lg pb-3 text-gray-300">
          You can go back to the
          <Link to="/" className="text-primary font-medium underline mx-2">
            homepage
          </Link>
          or use the navigation menu to find what you are looking for.
        </p>
        <p className="text-lg pb-3 text-gray-300">
          If you believe this is an error, please contact us for assistance.
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;
