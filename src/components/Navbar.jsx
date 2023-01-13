import React from "react";
import ReactDOM from 'react-dom';
import "./Navbar.css";
import PlaceOrder from "./PlaceOrder"



const Navbar = () => {
    return (
        <nav className = "nav">
            <a href="/" className="site-title">Disruptive Delivery</a>
                <ul>
                    <li>
                        <a href="/PlaceOrder">Place order</a>
                    </li>
                    <li>
                        <a href="/TrackOrder">Track order</a>
                    </li>
                    <li>
                        <a href="/Delivery">Delivery</a>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar;
