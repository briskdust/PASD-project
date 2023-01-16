import axios from "axios";
import sanityClient from "../client";
import uuid from "react-uuid";

const OrderForm = () => {
  const orders = [];

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
            _id: uuid(order.id),
          };

          let counter = 0;

          for (const exOrder of orders) {
            if (exOrder.id !== order.id) {
              counter++;
            }
          }
          if (counter === orders.length) {
            orders.push(doc);
          }
        }

        for (const exOrders of orders) {
          sanityClient.createIfNotExists(exOrders);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return <button onClick={getOrders}>get orders</button>;
};

export default OrderForm;
