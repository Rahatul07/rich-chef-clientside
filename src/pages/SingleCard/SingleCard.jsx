import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleCard = () => {
  const { id } = useParams();
  const chef = useLoaderData();
  console.log(id, chef);
  const {
    img_url,
    likes,
    name,
    numbers_of_recipes,
    short_bio,
    year_of_experience,
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
      <div className="card card-compact rounded-2xl w-2/5 mx-auto mt-5 bg-primary shadow-xl  mb-24 flex">
        <div className="card-body text-center">
          <h2 className="font-extrabold text-white text-5xl ">{name}</h2>

          <p className="text-white mx-14 text-lg">{short_bio}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
