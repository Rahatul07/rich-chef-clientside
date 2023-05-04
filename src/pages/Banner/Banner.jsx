import React from "react";
import coverImage from "../../assets/homeCarousel/banner.png";
const Banner = () => {
  return (
    <div>
      <div
        className="h-96 w-auto bg-cover  pb-24 mt-10 mb-10 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(${coverImage})`,
        }}
      >
        <h1
          className="uppercase text-gray-300 text-center   pt-32 text-4xl"
          style={{ fontFamily: "'Kalam', cursive" }}
        >
          Subscribe to our Newsletter
        </h1>
        <p className="text-gray-300 text-center mt-3 text-lg">
          Fusce id velit placerat, efficitur libero placerat, sodales ante.
          Curabitur sed erosat orci congue vestibulum.
        </p>
        <button className="btn btn-primary mt-3">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Banner;
