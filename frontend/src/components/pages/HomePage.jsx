import sanityClient from "../../client";
import { NavLink } from "react-router-dom";
import Menu from "../../styles/Menu.styled";
import Delivery from "./Delivery";
import ReactDom from "react-dom";

import { useState } from "react";
import LoginModal from "../LoginModal";
import TrackingDetail from "../TrackingDetail";
import OrderForm from "../OrderForm";

const HomePage = () => {
  const [isClicked, setClicked] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentTab, setCurrentTab] = useState("");

  const changeTab = e => {
    setCurrentTab(e.currentTarget.id);
  };

  const setChildClick = () => {
    setClicked(false);
  };

  const setChildLogin = () => {
    setLoggedIn(true);
  };

  sanityClient
    .fetch(`*[_type == "order"]`)
    .then(data => console.log(data))
    .catch(console.error);

  const showLogin = e => {
    e.preventDefault();
    setClicked(true);
  };

  return (
    <Menu>
      <div className="app">
        <div className="header">
          <div className="header-menu">
            <nav>
              <ul>
                <li id="order" onClick={changeTab}>
                  <NavLink to="/place-order">Register Order</NavLink>
                </li>
                <li id="tracking" onClick={changeTab}>
                  <NavLink to="/tracking">Track order</NavLink>
                </li>
                <li id="delivery" onClick={changeTab}>
                  <NavLink to="/delivery">Delivery</NavLink>
                </li>

                <button className="log-btn" onClick={showLogin}>
                  {isLoggedIn ? "Welcome Kevin" : "register / login"}
                </button>
              </ul>
            </nav>
          </div>
        </div>
        <div className="content">
          {currentTab === "order" && <OrderForm />}
          {currentTab === "tracking" && <TrackingDetail />}
          {currentTab === "delivery" && <Delivery />}
        </div>
      </div>
      {isClicked
        ? ReactDom.createPortal(
            <LoginModal
              close={!isClicked}
              setClose={setChildClick}
              setLogin={setChildLogin}
            />,
            document.getElementById("modal-root")
          )
        : ""}
    </Menu>
  );
};

export default HomePage;
