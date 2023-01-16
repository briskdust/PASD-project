import axios from "axios";
import sanityClient from "../client";

const RegisterDelivery = () => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/deliveries",
    headers: {
      "Content-Type": "application/json",
    },
  };

  sanityClient
    .fetch(`*[_type == "order"]`)
    .then(data => {
      console.log(data);
      for (const order of data) {
        const doc = {
          order_id: order.id,
          price_in_cents: 0,
          expected_delivery_datetime: "2023-01-16T15:34:02.782Z",
        };
      }
    })
    .catch(console.error);

  return <div>RegisterDelivery</div>;
};

export default RegisterDelivery;

/*
{
  "price_in_cents": 0,
  "expected_delivery_datetime": "2023-01-16T15:34:02.782Z",
  "order_id": 0
}
*/
