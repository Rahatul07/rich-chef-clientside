import React from "react";

const Ingredients = ({ ingredient }) => {
  return (
    <div>
      <ul className="list-disc ml-5">
        <li>{ingredient}</li>
      </ul>
    </div>
  );
};

export default Ingredients;
