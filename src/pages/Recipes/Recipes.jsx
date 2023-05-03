import React from "react";
import Ingredients from "../Ingredients/Ingredients";

const Recipes = ({ recipe }) => {
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
          <p className="text-white">
            <span className="text-primary font-bold">COOKING METHOD:</span>{" "}
            {cooking_method}
          </p>
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
