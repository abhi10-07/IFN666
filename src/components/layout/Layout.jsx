import { Fragment, useState } from "react";

import React from "react";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";
import Footer from "./Footer";

const Layout = (props) => {
  const [activeState, setActiveState] = useState(0);

  return (
    <Fragment>
      <Header activeState={activeState} />
      <hr />
      <main className="container">
        <BreadCrumb />
        <hr />
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
