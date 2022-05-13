import { Fragment, useState } from "react";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const [activeState, setActiveState] = useState(0);

  return (
    <Fragment>
      <Header activeState={activeState} />
      <hr style={{ marginTop: "0px" }} />
      <main className="container">
        {props.children}
        <Footer />
      </main>
    </Fragment>
  );
};

export default Layout;
