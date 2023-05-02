import React from "react";
// import { Link } from "react-router-dom";

const Card = ({ chef }) => {
  console.log(chef);
  const {
    favorite,
    img_url,
    likes,
    name,
    numbers_of_recipes,
    short_bio,
    year_of_experience,
  } = chef;
  return (
    <div>
      <div className="">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-full  w-auto">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={img_url}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-2xl font-bold text-white pb-14"></h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>

            <div className="card-actions inline-flex items-center justify-between">
              {/* <Link to={`/products/${id}`}>
              <button className="btn btn-primary rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                Learn more
              </button>
            </Link> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
