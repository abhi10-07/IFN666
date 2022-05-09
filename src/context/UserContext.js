import React from "react";

const UserContext = React.createContext({
  navActive: {},
  breadCrumbs: {},
  setLoaderHandler: () => {},
});

export default UserContext;
