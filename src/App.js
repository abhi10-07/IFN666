import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Home from "./components/Home/Home";

function App() {
  const [activeState, setActiveState] = useState("home");
  return (
    <div>
      <Header activeState={activeState} />
      <Home />
    </div>
  );
}

export default App;
