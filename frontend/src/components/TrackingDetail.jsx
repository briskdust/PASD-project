import React, { useRef, useState } from "react";
import Tracking from "../styles/Tracking.styled";
import sanityClient from "../client";

const TrackingDetail = props => {
  const [delivery, setDelivery] = useState({});
  const [dest, setDest] = useState("");
  const deliveryRef = useRef("");

  const statusMapping = {
    EXP: "Expected",
    REJ: "Rejected",
    RFP: "Ready for pickup",
    TRN: "Transport",
    DEL: "Delivered",
  };

  const getDestination = ID => {
    sanityClient.fetch(`*[_type == "order"&&id==${ID}]`).then(data => {
      console.log(data[0].receiver_info.street_and_number);
      setDest(data[0].receiver_info.street_and_number);
    });
  };

  const searchDelivery = () => {
    const dID = parseInt(deliveryRef.current.value);
    sanityClient.fetch(`*[_type == "delivery"&&id==${dID}]`).then(data => {
      console.log(data);
      setDelivery(data[0]);
      getDestination(data[0].order_id);
    });
  };

  return (
    <>
      <label htmlFor="deliver-id">Deliver ID: </label>
      <input ref={deliveryRef} id="deliver-id" type="text" />
      <label htmlFor="add-label">Attach label: </label>
      <input type="file" />
      <button onClick={searchDelivery}>search</button>
      {JSON.stringify(delivery) === "{}" ? (
        ""
      ) : (
        <Tracking>
          <div className="container">
            <header>
              <h1>Delivery Details</h1>
              <h3>Delivery #{delivery.id}</h3>
            </header>
            <div className="content">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1206469/delivery-truck%20(1).svg"
                alt="truck"
              />
              <div className="border-left">
                <div className="row">
                  <div className="created-at">Label Created</div>
                  <div className="">{delivery["_createdAt"]}</div>
                </div>
                <div className="row">
                  <div className="origin">Status</div>
                  <div className="">{statusMapping[delivery.status]}</div>
                </div>
                <div className="row">
                  <div className="destination">Destination</div>
                  <div className="">{dest}</div>
                </div>
              </div>
            </div>
          </div>
        </Tracking>
      )}
    </>
  );
};

export default TrackingDetail;
