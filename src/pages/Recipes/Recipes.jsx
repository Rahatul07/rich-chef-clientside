import React, { useState } from "react";
import Ingredients from "../Ingredients/Ingredients";

const Recipes = ({ recipe }) => {
  const [fold, setFold] = useState();
  console.log(recipe);
  const { cooking_method, ingredients, rating, recipe_img, recipe_name } =
    recipe;
  return (
    <div>
      <div className="card w-96 h-full shadow-xl glass">
        <figure>
          <img src={recipe_img} alt="Shoes" />
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
          {/* <p className="text-white">
            <span className="text-primary font-bold">COOKING METHOD:</span>
            {cooking_method < 100 ? (
              <>{cooking_method}</>
            ) : (
              <>{cooking_method.slice(0, 100)}</>
            )}
          </p> */}
          <p className="text-white">
            <span className="text-primary font-bold">RATING:</span> {rating}
          </p>
          <p className="text-white ">
            <span className="text-primary font-bold">INGREDIENTS:</span>
            {ingredients.map((ingredient) => (
              <Ingredients key={ingredient.index} ingredient={ingredient} />
            ))}
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
