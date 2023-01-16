import React from "react";
import OpenPage from "./components/OpenPage";
import { useState } from "react";
import HomePage from "./components/pages/HomePage";
import GlobalStyle from "./styles/GlobalStyle";
import TrackingDetail from "./components/TrackingDetail";
import Delivery from "./components/pages/Delivery";
import OrderForm from "./components/OrderForm";
import Payment from "./components/Payment";
import RegisterDelivery from "./components/RegisterDelivery";

const App = () => {
  const [clicked, setClicked] = useState(false);

  const onClicked = () => {
    setClicked(prevState => !prevState);
  };

  return (
    <>
      <GlobalStyle />

      {/* <Payment /> */}
      {/* <OrderForm />
      <RegisterDelivery /> */}
      {clicked ? <HomePage /> : <OpenPage onClicked={onClicked} />}
    </>
  );
};

export default App;
