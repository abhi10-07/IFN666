import React from "react";

import Banner from "../components/home/Banner";
import Home from "../components/home/Home";
import BreadCrumb from "../components/layout/BreadCrumb";

const HomePage = () => {
  return (
    <>
      <BreadCrumb />
      <hr />
      <Banner />
      <Home />
    </>
  );
};

export default HomePage;
