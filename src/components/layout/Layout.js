import { Fragment, useState } from "react";

import Header from "./Header";

const Layout = (props) => {
  const [activeState, setActiveState] = useState(0);
  return (
    <Fragment>
      <Header activeState={activeState} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
