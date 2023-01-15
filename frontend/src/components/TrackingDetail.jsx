import React from "react";
import Tracking from "../styles/Tracking.styled";

const TrackingDetail = props => {
  return (
    <Tracking>
      <div className="container">
        <header>
          <h1>Tacking Details</h1>
          <h3>Order {props.orderNumber}</h3>
        </header>
        <div className="content">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1206469/delivery-truck%20(1).svg"
            alt="truck"
          />
          <div className="border-left">
            <div className="row">
              <div className="created-at">Label Created</div>
              <div className="">2022</div>
            </div>
            <div className="row">
              <div className="origin">Shanghai</div>
            </div>
            <div className="row">
              <div className="destination">Zurich</div>
            </div>
          </div>
        </div>
      </div>
    </Tracking>
  );
};

export default TrackingDetail;
