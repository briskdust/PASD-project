import sanityClient from "../../client";
import { NavLink } from "react-router-dom";
import Menu from "../../styles/Menu.styled";
import Delivery from "./Delivery";
import DeliveryUser from "./DeliveryUser";
import ReactDom from "react-dom";
import axios from "axios";
import uuid from "react-uuid";

import { useState } from "react";
import LoginModal from "../LoginModal";
import TrackingDetail from "../TrackingDetail";
import OrderForm from "../OrderForm";
import RegisterDelivery from "../RegisterDelivery";
import ContactForm from "../ContactForm";
import PlaceOrder from "../PlaceOrder";

const fetchedOrders = [];

const HomePage = () => {
  const [isClicked, setClicked] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState("");
  const [currentTab, setCurrentTab] = useState("");
  const [orders, setOrders] = useState([]);

  const options = {
    method: "GET",
    url: "http://localhost:5000/orders",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getOrders = e => {
    e.preventDefault();

    axios
      .request(options)
      .then(function (response) {
        for (const order of response.data.orders) {
          const doc = {
            _type: "order",
            ...order,
            _id: uuid(),
          };

          let counter = 0;

          for (const exOrder of fetchedOrders) {
            if (exOrder.id !== order.id) {
              counter++;
            }
          }
          if (counter === fetchedOrders.length) {
            fetchedOrders.push(doc);
          }
        }

        setOrders(fetchedOrders);

        for (const exOrders of fetchedOrders) {
          sanityClient.createIfNotExists(exOrders);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const changeTab = e => {
    setCurrentTab(e.currentTarget.id);
  };

  const setChildClick = () => {
    setClicked(false);
  };

  const setChildLogin = userType => {
    setLoggedIn(userType);
  };

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
                {isLoggedIn === "" ? (
                  <li id="place-order" onClicke={changeTab}>
                    <NavLink to="/place-order">Place Order</NavLink>
                  </li>
                ) : (
                  ""
                )}
                {isLoggedIn === "ADMIN" ? (
                  <li id="register-order" onClick={changeTab}>
                    <NavLink to="/register-order">Register Order</NavLink>
                  </li>
                ) : (
                  ""
                )}
                <li id="tracking" onClick={changeTab}>
                  <NavLink to="/tracking">Track order</NavLink>
                </li>
                {isLoggedIn === "ADMIN" ? (
                  ""
                ) : (
                  <li id="delivery" onClick={changeTab}>
                    <NavLink to="/delivery">Delivery</NavLink>
                  </li>
                )}
                {isLoggedIn === "" ? (
                  <li id="contact" onClick={changeTab}>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                ) : (
                  ""
                )}

                <button className="log-btn" onClick={showLogin}>
                  {isLoggedIn ? "Welcome" : "register / login"}
                </button>
              </ul>
            </nav>
          </div>
        </div>
        <div className="content">
          {currentTab === "place-order" && <PlaceOrder />}
          {currentTab === "register-order" && (
            <button onClick={getOrders}>fetch all orders</button>
          )}
          {currentTab === "order" &&
            orders.length > 0 && ( // show all the order IDs here
              <RegisterDelivery orders={orders} />
            )}
          {currentTab === "tracking" && <TrackingDetail />}
          {currentTab === "contact" && <ContactForm />}
          {currentTab === "delivery" && isLoggedIn === "DRIVER" && <Delivery />}
          {currentTab === "delivery" && isLoggedIn === "" && <DeliveryUser />}
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
