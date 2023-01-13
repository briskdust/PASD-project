import sanityClient from "../../client";
import { Route, NavLink } from "react-router-dom";
import Menu from "../../styles/Menu.styled";

const HomePage = () => {
  const doc = {
    _type: "order",
    name: "briskdust",
  };

  sanityClient
    .fetch(`*[_type == "order"]`)
    .then(data => console.log(data))
    .catch(console.error);

  const trialPatch = () => {
    sanityClient.create(doc);
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
                  <button>register</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default HomePage;
