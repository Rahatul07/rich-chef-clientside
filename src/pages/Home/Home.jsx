import React from "react";
import Body from "../../components/shared/Body/Body";
import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";
import FlavorExplosion from "../Flavor_Explosion/FlavorExplosion";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import LazyLoad from "react-lazy-load";
import App from "../../App";
const Home = () => {
  const chefs = useLoaderData();

  return (
    <LazyLoad>
      <div>
        <Body />
        <h1
          className=" font-bold  text-gray-300 text-center text-5xl mb-2 mt-36"
          style={{ fontFamily: "'Parisienne', cursive" }}
        >
          Talent and Experience
        </h1>
        <h1
          className=" font-bold  text-primary text-center text-5xl "
          style={{ fontFamily: "'Montserrat', cursive" }}
        >
          Team Members
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 md:mx-48 xl:mx-60 2xl:mx-72 gap-5 lg:gap-10  mt-10 pb-10">
          {chefs.map((chef) => (
            <Card key={chef.id} chef={chef} />
          ))}
        </div>
        <FlavorExplosion />
        <Banner />
        <App />
        <Reviews />
      </div>
    </LazyLoad>
  );
};

export default Home;
