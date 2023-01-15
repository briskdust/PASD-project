import axios from "axios";

const OrderForm = () => {
  // axios.defaults.baseURL = "https://pasd-webshop-api.onrender.com";
  // axios.defaults.headers["X-API-KEY"] = "hBqPEeyJNXexUZfgJRCZ";

  const options = {
    method: "GET",
    url: "https://pasd-webshop-api.onrender.com/api/order/",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "hBqPEeyJNXexUZfgJRCZ",
      "Access-Control-Allow-Headers": "Authorization",
    },
  };

  const getOrders = e => {
    e.preventDefault();

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    // axios({
    //   url: "/api/order/",
    //   method: "get",
    //   headers: {
    //     "x-api-key": "hBqPEeyJNXexUZfgJRCZ",
    //     "Access-Control-Allow-Credentials": true,
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "same-origin",
    // })
    //   .then(res => res.data)
    //   .then(data => {
    //     console.log(data);
    //   });
  };

  return <button onClick={getOrders}>get orders</button>;
};

export default OrderForm;
