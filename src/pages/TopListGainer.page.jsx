import React from "react";
import { useLocation } from "react-router-dom";

import ToplistGainer from "../components/Top/TopListGainer";
import BreadCrumb from "../components/layout/BreadCrumb";

const TopListGainer = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <BreadCrumb />
      <hr />
      <ToplistGainer data={location.state.gainer} />
    </>
  );
};

export default TopListGainer;
