import axios from "axios";
import sanityClient from "../client";
import { useState } from "react";

const RegisterDelivery = props => {
  let currentTime = new Date().getTime();
  let updatedTIme = new Date(currentTime + 2 * 60 * 60 * 1000);
  const newTime = updatedTIme.toISOString();
  const [orders, setOrders] = useState([]);

  const deleteDoc = ID => {
    sanityClient.delete({ query: `*[_type == "order" && id==${ID}` });
  };

  const fetchAllOrders = () => {
    sanityClient.fetch(`*[_type == "order"]`).then(data => {
      console.log(data);
      setOrders(data);
    });
  };

  const registerOrder = e => {
    for (const order of props.orders) {
      const doc = {
        order_id: order.id,
        price_in_cents: 0,
        expected_delivery_datetime: newTime,
      };

      console.log(doc);

      axios({
        url: "http://localhost:5000/delivery",
        method: "post",
        data: doc,
      })
        .then(res => res.data)
        .then(data => {
          const doc = {
            _type: "delivery",
            order_id: data.order_id,
            id: data.id,
            cost_in_cents: data.cost_in_cents,
            status: "EXP",
          };

          sanityClient.create(doc);
        });
    }
  };

  return <button onClick={registerOrder}>register all orders</button>;
};

export default RegisterDelivery;
