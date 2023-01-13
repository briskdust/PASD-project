import sanityClient from "../../client";
import { Route, NavLink } from "react-router-dom";
import Menu from "../../styles/Menu.styled";
import Delivery from "./Delivery";
import ReactDom from "react-dom";

import { useState } from "react";
import LoginForm from "../LoginForm";
import LoginModal from "../LoginModal";

const HomePage = () => {
  const [isClicked, setClicked] = useState(false);
  const doc = {
    _type: "order",
    name: "briskdust",
  };

  const setChildClick = bool => {
    setClicked(bool);
  };

  sanityClient
    .fetch(`*[_type == "order"]`)
    .then(data => console.log(data))
    .catch(console.error);

  const trialPatch = () => {
    sanityClient.create(doc);
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
                <li>
                  <NavLink to="/place-order">Place Order</NavLink>
                </li>
                <li>
                  <NavLink to="/tracking">Track order</NavLink>
                </li>
                <li>
                  <NavLink to="/delivery">Delivery</NavLink>
                </li>
                <li>
                  <button onClick={showLogin}>register</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div>
        <Route path="/place-order"></Route>
        <Route path="/tracking"></Route>
        <Route path="/delivery">{/* <Delivery /> */}</Route>
      </div>
      {isClicked
        ? ReactDom.createPortal(
            <LoginModal />,
            document.getElementById("modal-root")
          )
        : ""}
    </Menu>
  );
};

export default HomePage;
