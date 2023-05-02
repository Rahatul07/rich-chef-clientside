import React from "react";
import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";

const Header = () => {
  return (
    <div>
      <div className="static ">
        <Body />
        <div className="absolute top-0 w-full">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
