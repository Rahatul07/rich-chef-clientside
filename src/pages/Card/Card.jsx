import React from "react";

import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ chef }) => {
  const {
    id,
    img_url,
    likes,
    name,
    numbers_of_recipes,
    short_bio,
    year_of_experience,
  } = chef;
  return (
    <div>
      <div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
          <div className="h-4/6  w-auto">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={img_url}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-2xl text-primary font-bold uppercase -mb-3  animate-bounce">
              {name}
            </h1>
            <p className="mt-5  text-xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Recipes: {numbers_of_recipes}
            </p>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Experience: {year_of_experience} years
            </p>
            <p className="mb-3  text-sm bg-primary bg-opacity-30 mx-auto italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-2 ">
              {short_bio}
            </p>
            <div className="card-actions inline-flex items-center justify-between">
              <Link to={`/chefRecipe/${id}`}>
                <button className="btn btn-primary rounded-none bg-neutral-900 py-1 mb-3 px-3.5 font-com text-sm  text-white shadow uppercase shadow-black/60">
                  View Recipes
                </button>
              </Link>
            </div>
            <div>
              <div className="flex items-center justify-between absolute bottom-4 left-4">
                <div>
                  <p className="flex  items-center justify-between text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
                    <FaThumbsUp />
                    <span className="ml-2">{likes}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
