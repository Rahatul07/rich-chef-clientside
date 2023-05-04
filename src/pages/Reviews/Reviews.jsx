import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import img1 from "../../assets/reivew_images/01.png";
import img2 from "../../assets/reivew_images/02.png";
import img3 from "../../assets/reivew_images/03.png";
import img4 from "../../assets/reivew_images/04.png";
import img5 from "../../assets/reivew_images/05.png";
import img6 from "../../assets/reivew_images/06.png";

const Reviews = () => {
  return (
    <>
      <h1
        className=" font-bold  text-primary text-center text-5xl mb-10"
        style={{ fontFamily: "'Montserrat', cursive" }}
      >
        FOOD REVIEWS
      </h1>
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="card card-side glass shadow-xl h-auto mb-5">
          <figure>
            <img
              className="w-36 h-auto m-5 rounded-2xl"
              src={img1}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div
              className=" text-white text-bold text-2xl "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              SHRIMP SCAMPI
            </div>

            <div className=" text-white text-base">
              Recipe by{" "}
              <span
                className="text-primary text-xl"
                style={{ fontFamily: "'Parisienne', cursive" }}
              >
                Alexa Rodriguez
              </span>
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-300 mr-2">4.5</h1>
              <div className="flex">
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <BsStarHalf className="text-primary text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="card card-side glass shadow-xl h-auto mb-5">
          <figure>
            <img
              className="w-36 h-auto m-5 rounded-2xl"
              src={img2}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div
              className=" text-white text-bold text-2xl "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              LOBSTER RISOTTO
            </div>

            <div className=" text-white text-base">
              Recipe by{" "}
              <span
                className="text-primary text-xl"
                style={{ fontFamily: "'Parisienne', cursive" }}
              >
                Mario Russo
              </span>
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-300 mr-2">5.0</h1>
              <div className="flex">
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="card card-side glass shadow-xl h-auto mb-5">
          <figure>
            <img
              className="w-36 h-auto m-5 rounded-2xl"
              src={img3}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div
              className=" text-white text-bold text-2xl "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              TIRAMISU
            </div>

            <div className=" text-white text-base">
              Recipe by{" "}
              <span
                className="text-primary text-xl"
                style={{ fontFamily: "'Parisienne', cursive" }}
              >
                Mario Russo
              </span>
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-300 mr-2">5.0</h1>
              <div className="flex">
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="card card-side glass shadow-xl h-auto mb-5">
          <figure>
            <img
              className="w-36 h-auto m-5 rounded-2xl"
              src={img4}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div
              className=" text-white text-bold text-2xl "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              SUSHI ROLLS
            </div>

            <div className=" text-white text-base">
              Recipe by{" "}
              <span
                className="text-primary text-xl"
                style={{ fontFamily: "'Parisienne', cursive" }}
              >
                Hiroshi Tanahashi
              </span>
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-300 mr-2">4.7</h1>
              <div className="flex">
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <BsStarHalf className="text-primary text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="card card-side glass shadow-xl h-auto mb-5">
          <figure>
            <img
              className="w-36 h-auto m-5 rounded-2xl"
              src={img5}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div
              className=" text-white text-bold text-2xl "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              MISO SOUP
            </div>

            <div className=" text-white text-base">
              Recipe by{" "}
              <span
                className="text-primary text-xl"
                style={{ fontFamily: "'Parisienne', cursive" }}
              >
                Hiroshi Tanahashi
              </span>
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-300 mr-2">5.0</h1>
              <div className="flex">
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="card card-side glass shadow-xl h-auto mb-5">
          <figure>
            <img
              className="w-36 h-auto m-5 rounded-2xl"
              src={img6}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div
              className=" text-white text-bold text-2xl "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              BEEF WELLINGTON
            </div>

            <div className=" text-white text-base">
              Recipe by{" "}
              <span
                className="text-primary text-xl"
                style={{ fontFamily: "'Parisienne', cursive" }}
              >
                John Smith
              </span>
            </div>
            <div className="flex items-center">
              <h1 className="text-gray-300 mr-2">5.0</h1>
              <div className="flex">
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
                <AiFillStar className="text-primary text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
