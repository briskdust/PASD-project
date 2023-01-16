import axios from "axios";
import { useState } from "react";
import sanityClient from "../client";

const OrderForm = () => {
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
        console.log(response.data);
        setOrders(response.data.orders);

        for (const order of response.data.orders) {
          const doc = {
            _type: "order",
            ...order,
          };
          sanityClient.create(doc);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return <button onClick={getOrders}>get orders</button>;
};

export default OrderForm;
