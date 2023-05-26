import React, { useState } from "react";
import Ingredients from "../Ingredients/Ingredients";
import { Rating } from "@smastrom/react-rating";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Swal from "sweetalert2";
import "@smastrom/react-rating/style.css";

import Tilt from "react-parallax-tilt";
const Recipes = ({ recipe }) => {
  const [fold, setFold] = useState();
  const [disabled, setDisabled] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { cooking_method, ingredients, rating, recipe_img, recipe_name } =
    recipe;

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    setDisabled(true);
    Swal.fire({
      icon: "success",
      title: "Successful!",
      text: "Added to favorite!",
    });
  };
  return (
    <Tilt>
      <div>
        <div className="card w-96 h-full shadow-xl glass">
          <figure>
            <img src={recipe_img} alt="recipe" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-primary uppercase ">
              {recipe_name}
              <sup className="badge badge-secondary text-xs lowercase  pt-0">
                special
              </sup>
            </h2>
            {!fold ? (
              <>
                <p className="text-white">
                  {cooking_method.substring(0, 100)}...{" "}
                  <span
                    className="cursor-pointer text-secondary link-hover"
                    onClick={() => setFold(!fold)}
                  >
                    See more
                  </span>
                </p>
              </>
            ) : (
              <p className="text-white">
                {cooking_method}{" "}
                <span
                  className="cursor-pointer text-secondary link-hover"
                  onClick={() => setFold(!fold)}
                >
                  Read less
                </span>
              </p>
            )}

            <div className="text-white ">
              <span className="text-primary font-bold">INGREDIENTS:</span>
              {ingredients.map((ingredient, index) => (
                <Ingredients key={index} ingredient={ingredient} />
              ))}
            </div>
            <div className="flex justify-between">
              <div className="text-white flex gap-2 items-center">
                <Rating style={{ maxWidth: 130 }} value={rating} readOnly />
                {rating}
              </div>
              <div className=" bottom-4 right-4 ">
                <p className="">
                  <button disabled={disabled} onClick={handleClick}>
                    {isFavorite ? (
                      <AiFillHeart className="text-red-600 text-2xl" />
                    ) : (
                      <AiOutlineHeart className="text-white text-2xl" />
                    )}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default Recipes;
