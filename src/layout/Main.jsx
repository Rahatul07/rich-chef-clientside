import React from "react";
import Header from "../components/shared/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/chefFooter";

const Main = () => {
  return (
    <div className="bg-gray-900 ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
