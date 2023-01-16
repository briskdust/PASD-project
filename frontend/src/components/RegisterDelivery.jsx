import axios from "axios";
import sanityClient from "../client";

const added = [];

const RegisterDelivery = () => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/deliveries",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let currentTime = new Date().getTime();
  let updatedTIme = new Date(currentTime + 2 * 60 * 60 * 1000);
  const newTime = updatedTIme.toISOString();

  const registerAllOrders = () => {
    sanityClient
      .fetch(`*[_type == "order"]`)
      .then(data => {
        console.log(data);
        for (const order of data) {
          const doc = {
            order_id: order.id,
            price_in_cents: 0,
            expected_delivery_datetime: newTime,
          };

          if (added.includes(order)) {
            continue;
          } else {
            axios({
              url: "http://localhost:5000/deliveries",
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              data: doc,
            });
          }
        }
      })
      .catch(console.error);
  };

  return <button onClick={registerAllOrders}>register all orders</button>;
};

export default RegisterDelivery;

/*
{
  "price_in_cents": 0,
  "expected_delivery_datetime": "2023-01-16T15:34:02.782Z",
  "order_id": 0
}
*/
