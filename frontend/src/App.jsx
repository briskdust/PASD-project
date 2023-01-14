import React from "react";
import OpenPage from "./components/OpenPage";
import { useState } from "react";
import HomePage from "./components/pages/HomePage";
import GlobalStyle from "./styles/GlobalStyle";
import TrackingDetail from "./components/TrackingDetail";
import Delivery from "./components/pages/Delivery";

const App = () => {
  const [clicked, setClicked] = useState(false);

  const onClicked = () => {
    setClicked(prevState => !prevState);
  };

  return (
    <>
      <GlobalStyle />
      {/* <Delivery /> */}
      {/* <TrackingDetail /> */}
      {clicked ? <HomePage /> : <OpenPage onClicked={onClicked} />}
    </>
  );
};

export default App;
