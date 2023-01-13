import React from "react";
import OpenPage from "./components/OpenPage";
import { useState } from "react";
import Main from "./components/Main";
import "./components/temp.css";

const App = () => {
  const [clicked, setClicked] = useState(false);

  const onClicked = () => {
    setClicked(prevState => !prevState);
  };

  return clicked ? <Main /> : <OpenPage onClicked={onClicked} />;
};

export default App;
