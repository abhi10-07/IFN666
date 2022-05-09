import React from "react";
import { useLocation } from "react-router-dom";

import TopListGainer from "../components/top/TopListGainer";
import BreadCrumb from "../components/layout/BreadCrumb";

const TopListGainerPage = () => {
  const location = useLocation();

  return (
    <>
      <BreadCrumb />
      <hr />
      <TopListGainer values = {location.state.props}/>
    </>
  );
};

export default TopListGainerPage;
