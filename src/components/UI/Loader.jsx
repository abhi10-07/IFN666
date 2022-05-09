import React from "react";

import LoaderImg from "../../assets/images/loading.gif";
import "../../assets/css/loader.css";

const Loader = () => {
  return (
    <div className="loader_bg container">
      <div className="loader">
        <img src={LoaderImg} alt="#" />
      </div>
    </div>
  );
};

export default Loader;
