import { Fragment, useState } from "react";

import Header from "./Header";
import BreadCrumb from "./BreadCrumb";

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
    </Fragment>
  );
};

export default Layout;
