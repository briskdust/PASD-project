import React from "react";
// import ReactDOM from 'react-dom';
import Navbar from "./Navbar.jsx";
import HomePage from "./HomePage.jsx";
import PlaceOrder from "./PlaceOrder.jsx";
import TrackOrder from "./TrackOrder.jsx";
import Delivery from "./Delivery.jsx"
import "./temp.css";



// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );


const Main = () => {
  let Content;
  switch (window.location.pathname) {
    case "/":
      Content = HomePage
      break
    case "/PlaceOrder":
      Content = PlaceOrder
      break
    case "/TrackOrder":
      Content = TrackOrder
      break
    case "/Delivery":
      Content = Delivery
      break
    default:
      break
  }
  console.log(Content);
  return (
    <>
      <Navbar/>
      if (Content != Null) {
        <component>
          <Content/>
        </component>
      }

    </>
  )
};

export default Main;
