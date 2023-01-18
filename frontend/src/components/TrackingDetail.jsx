import React, { useRef, useState } from "react";
import Tracking from "../styles/Tracking.styled";
import sanityClient from "../client";
import axios from "axios";

const TrackingDetail = props => {
  axios.defaults.url = "http://localhost:5000";
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
    if (ID.toString().length < 10) {
      sanityClient.fetch(`*[_type == "order"&&id==${ID}]`).then(data => {
        console.log(data[0].receiver_info.street_and_number);
        setDest(data[0].receiver_info.street_and_number);
      });
    } else {
      sanityClient.fetch(`*[_type == "personal"&&id=="${ID}"]`).then(data => {
        setDest(data[0].receiver_info.street_and_number);
      });
    }
  };

  const searchDelivery = () => {
    if (deliveryRef.current.value.length < 10) {
      const dID = parseInt(deliveryRef.current.value);
      sanityClient.fetch(`*[_type == "delivery"&&id==${dID}]`).then(data => {
        console.log(data);
        setDelivery(data[0]);
        getDestination(data[0].order_id);
      });
    } else {
      const longID = deliveryRef.current.value;
      console.log("running");
      console.log(longID);
      sanityClient
        .fetch(`*[_type == "personal"&&id=="${longID}"]`)
        .then(data => {
          console.log(data);
          setDelivery(data[0]);
          getDestination(deliveryRef.current.value);
        });
    }
  };

  function changeStatus(e) {
    e.preventDefault();

    if (deliveryRef.current.value.length < 10) {
      if (e.target.id === "label") {
        axios({
          url: `/label/${deliveryRef.current.value}`,
          method: "GET",
        }).then(async res => {
          sanityClient
            .patch(delivery["_id"])
            .set({ status: "RFP" })
            .commit()
            .then(() => {
              console.log("runneddddd");
              sanityClient
                .fetch(
                  `*[_type == "delivery" && id == ${parseInt(
                    deliveryRef.current.value
                  )}]`
                )
                .then(res => {
                  setDelivery(res[0]);
                });
            });
        });
      } else if (e.target.id === "pickup") {
        axios({
          url: `/pickup/${deliveryRef.current.value}`,
          method: "GET",
        }).then(async res => {
          sanityClient
            .patch(delivery["_id"])
            .set({ status: "TRN" })
            .commit()
            .then(() => {
              console.log("runneddddd");
              sanityClient
                .fetch(
                  `*[_type == "delivery" && id == ${parseInt(
                    deliveryRef.current.value
                  )}]`
                )
                .then(res => {
                  setDelivery(res[0]);
                });
            });
        });
      } else {
        axios({
          url: `/delivered/${deliveryRef.current.value}`,
          method: "GET",
        }).then(async res => {
          sanityClient
            .patch(delivery["_id"])
            .set({ status: "DEL" })
            .commit()
            .then(() => {
              console.log("runneddddd");
              sanityClient
                .fetch(
                  `*[_type == "delivery" && id == ${parseInt(
                    deliveryRef.current.value
                  )}]`
                )
                .then(res => {
                  setDelivery(res[0]);
                });
            });
        });
      }
    } else {
      if (e.target.id === "label") {
      } else if (e.target.id === "pickup") {
        sanityClient
          .patch(delivery["_id"])
          .set({ status: "TRN" })
          .commit()
          .then(() => {
            console.log("runneddddd");
            sanityClient
              .fetch(
                `*[_type == "personal" && id == "${deliveryRef.current.value}"]`
              )
              .then(res => {
                setDelivery(res[0]);
              });
          });
      } else {
        sanityClient
          .patch(delivery["_id"])
          .set({ status: "DEL" })
          .commit()
          .then(() => {
            console.log("runneddddd");
            sanityClient
              .fetch(
                `*[_type == "personal" && id == "${deliveryRef.current.value}"]`
              )
              .then(res => {
                setDelivery(res[0]);
              });
          });
      }
    }
  }

  return (
    <>
      <Tracking>
        <div className="labelContainer">
          <p className="labelP"><label htmlFor="deliver-id">Deliver ID: </label>
          <input ref={deliveryRef} id="deliver-id" type="text" /></p>
          <p className="labelP"><label htmlFor="add-label">Attach label: </label>
          <input type="file" /></p>
          
          <button className="labelButton" onClick={searchDelivery}>search</button>
        </div>
      </Tracking>
      
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
              {props.userType !== "" ? (
                <div className="control-set">
                  <button
                    id="label"
                    onClick={changeStatus}
                    className="control-btn"
                  >
                    Attach label
                  </button>
                  <button
                    id="pickup"
                    onClick={changeStatus}
                    className="control-btn"
                  >
                    Parcel picked up
                  </button>
                  <button
                    id="delivered"
                    onClick={changeStatus}
                    className="control-btn"
                  >
                    Parcel delivered
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </Tracking>
      )}
    </>
  );
};

export default TrackingDetail;

/*
 * EXP
 * RFP
 * TRN
 * DEL
 */
