import "../styles/temp.css";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="header">
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
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
