import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipes from "../Recipes/Recipes";

const ChefRecipe = () => {
  const { id } = useParams();
  const chef = useLoaderData();
  console.log(id);
  const {
    img_url,
    likes,
    name,
    numbers_of_recipes,
    short_bio,
    year_of_experience,
    recipes,
  } = chef;
  return (
    <div>
      <div className="card card-compact rounded-full w-2/5 mx-auto mt-24 bg-base-100 shadow-xl animate-pulse animate-bounce">
        <figure>
          <img
            src={img_url}
            className="rounded-full  border-primary border-8"
            alt="chef"
          />
        </figure>
      </div>
      <div className="flex items-center pb-24 mx-10 gap-3">
        <div className="rounded-xl  mt-5   glass text-center border  text-white shadow   w-48 mx-auto  animate-bounce">
          <div className="stat ">
            <div className="stat-title text-white bg-primary bg-opacity-20 ">
              RECIPES
            </div>
            <div className="stat-value">{numbers_of_recipes}</div>
          </div>
        </div>
        <div className="rounded-xl  mt-5   glass text-center border  text-white shadow   w-48 mx-auto  animate-bounce">
          <div className="stat ">
            <div className="stat-title text-white bg-primary bg-opacity-20 ">
              EXPERIENCE
            </div>
            <div className="stat-value">{year_of_experience}</div>
          </div>
        </div>

        <div className=" rounded-xl w-2/5 mx-auto mt-5   glass text-center ">
          <div className="card-body">
            <h2 className="font-extrabold text-white text-5xl">{name}</h2>
            <p className="text-white">{short_bio}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="rounded-xl  mt-5   glass text-center border  text-white shadow   w-48 mx-auto  animate-bounce">
          <div className="stat ">
            <div className="stat-title text-white bg-primary bg-opacity-20 ">
              RESIDENCE
            </div>
            <div className="stat-value">ITALY</div>
          </div>
        </div>

        <div className="rounded-xl  mt-5   glass text-center border  text-white shadow   w-48 mx-auto  animate-bounce">
          <div className="stat ">
            <div className="stat-title text-white bg-primary bg-opacity-20 ">
              LIKES
            </div>
            <div className="stat-value">{likes}</div>
          </div>
        </div>
      </div>
      <div className="mx-20 grid grid-cols-3 gap-5 pb-24">
        {recipes.map((recipe) => (
          <Recipes key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecipe;
