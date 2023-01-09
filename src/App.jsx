import React from "react";
import OpenPage from "./components/OpenPage";
import { useState } from "react";
import HomePage from "./components/HomePage";
import "./components/temp.css";

const App = () => {
  const [clicked, setClicked] = useState(false);

  const onClicked = () => {
    setClicked(prevState => !prevState);
  };

  return clicked ? <HomePage /> : <OpenPage onClicked={onClicked} />;
};

export default App;
