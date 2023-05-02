import React from "react";
import Body from "../../components/shared/Body/Body";
import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const chefs = useLoaderData();

  return (
    <div>
      <Body />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 md:mx-48 xl:mx-60 2xl:mx-72 gap-5 lg:gap-10 mb-10 mt-20 ">
        {chefs.map((chef) => (
          <Card key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default Home;
