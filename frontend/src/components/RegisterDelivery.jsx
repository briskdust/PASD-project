import axios from "axios";
import sanityClient from "../client";
import { useState } from "react";

const RegisterDelivery = () => {
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
    //   for (const order of data) {
    //     const doc = {
    //       order_id: order.id,
    //       price_in_cents: 0,
    //       expected_delivery_datetime: newTime,
    //     };

    //     axios({
    //       url: "http://localhost:5000/delivery",
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       data: doc,
    //     });
    //   }
    // })
    // .catch(err => console.log("oops"));
  };

  const registerOrder = e => {
    console.log(e.target.id);
    const doc = {
      order_id: e.target.id,
      price_in_cents: 0,
      expected_delivery_datetime: newTime,
    };

    console.log(doc);

    axios({
      url: "http://localhost:5000/delivery",
      method: "post",
      data: doc,
    });
  };

  return (
    <>
      <button onClick={fetchAllOrders}>fetch all orders</button>
      {orders.map(order => (
        <button key={order.id} id={order.id} onClick={registerOrder}>
          register this order {order.id}
        </button>
      ))}
    </>
  );
};

export default RegisterDelivery;

/*
{
  "price_in_cents": 0,
  "expected_delivery_datetime": "2023-01-16T15:34:02.782Z",
  "order_id": 0
}
*/
