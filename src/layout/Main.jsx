import React from "react";
import Header from "../components/shared/header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-gray-900 pb-72">
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
