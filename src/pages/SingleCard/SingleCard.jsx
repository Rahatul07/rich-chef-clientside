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
      <div className="card w-96 glass">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
      <div className="card card-compact rounded-2xl w-2/5 mx-auto mt-5 bg-primary shadow-xl  mb-24 flex">
        <div className="card-body text-center">
          <h2 className="font-extrabold text-white text-5xl ">{name}</h2>

          <p className="text-white mx-14 text-lg">{short_bio}</p>
        </div>
      </div>
      <div className="flex border rounded-lg bg-primary text-white shadow mb-10  w-10/12 mx-auto">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat ">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
