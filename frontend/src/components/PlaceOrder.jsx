import React, { useState, useRef } from "react";
import sanityClient from "../client";
import uuid from "react-uuid";
import ReactDom from "react-dom";

import PlaceStyle from "../styles/PlaceStyle.styled";
import PaymentModal from "./PaymentModal";

const PlaceOrder = () => {
  const [totalPrice, setPrice] = useState();
  const [isClicked, setClicked] = useState(false);

  const breakableRef = useRef();
  const perishableRef = useRef();
  const privateRef = useRef();
  const premiumRef = useRef();

  const lengthRef = useRef("");
  const widthRef = useRef("");
  const heightRef = useRef("");

  const senderNameRef = useRef("");
  const senderEmailRef = useRef("");
  const senderStreetRef = useRef("");
  const senderZipRef = useRef("");
  const senderCityRef = useRef("");
  const senderCountryRef = useRef("");

  const recNameRef = useRef("");
  const recStreetRef = useRef("");
  const recZipRef = useRef("");
  const recCityRef = useRef("");
  const recCountryRef = useRef("");

  const closePayment = () => {
    setClicked(false);
  };

  const priceAlgo = e => {
    e.preventDefault();

    const length = parseInt(lengthRef.current.value);
    const height = parseInt(heightRef.current.value);
    const width = parseInt(widthRef.current.value);

    const isPerishable = perishableRef.current.checked ? 1 : 0;
    const isBreakable = breakableRef.current.checked ? 1 : 0;
    const isPrivate = privateRef.current.checked ? 1 : 0;
    const isPremium = premiumRef.current.checked ? 1 : 0;

    const price =
      0.00000001 * (length * height * width) +
      2.99 +
      0.99 * (isBreakable + isPrivate) +
      2.99 * isPerishable +
      1.99 * isPremium;

    setPrice(Math.round(price));
  };

  const addOrder = e => {
    e.preventDefault();

    const doc = {
      _type: "personal",
      id: uuid(),
      status: "RFP",
      is_breakable: breakableRef.current.checked,
      is_perishable: perishableRef.current.checked,
      is_private: privateRef.current.checked,
      is_premium: premiumRef.current.checked,
      x_in_mm: parseInt(lengthRef.current.value),
      y_in_mm: parseInt(widthRef.current.value),
      z_in_mm: parseInt(heightRef.current.value),
      sender_info: {
        _type: "sender_info",
        name: senderNameRef.current.value,
        email: senderEmailRef.current.value,
        street_and_number: senderStreetRef.current.value,
        zipcode: senderZipRef.current.value,
        city: senderCityRef.current.value,
        country: senderCountryRef.current.value,
      },
      receiver_info: {
        _type: "receiver_info",
        name: recNameRef.current.value,
        street_and_number: recStreetRef.current.value,
        zipcode: recZipRef.current.value,
        city: recCityRef.current.value,
        country: recCountryRef.current.value,
      },
      send_date: new Date().toJSON(),
    };

    sanityClient.create(doc);

    breakableRef.current.checked = false;
    perishableRef.current.checked = false;
    privateRef.current.checked = false;
    premiumRef.current.checked = false;

    lengthRef.current.value = "";
    widthRef.current.value = "";
    heightRef.current.value = "";

    senderNameRef.current.value = "";
    senderEmailRef.current.value = "";
    senderStreetRef.current.value = "";
    senderZipRef.current.value = "";
    senderCityRef.current.value = "";
    senderCountryRef.current.value = "";

    recNameRef.current.value = "";
    recStreetRef.current.value = "";
    recZipRef.current.value = "";
    recCityRef.current.value = "";
    recCountryRef.current.value = "";

    setClicked(true);
  };

  return (
    <PlaceStyle>
      <form>
        <input ref={breakableRef} type="checkbox" id="is-breakable" />
        <label className="blabel" htmlFor="is-breakable">
          Breakable
        </label>
        <input ref={perishableRef} type="checkbox" id="is-perishable" />
        <label className="blabel" htmlFor="is-perishable">
          Perishable
        </label>
        <input ref={privateRef} type="checkbox" id="is-private" />
        <label className="blabel" htmlFor="is-private">
          Private
        </label>
        <input ref={premiumRef} type="checkbox" id="is-premium" />
        <label className="blabel" htmlFor="is-premium">
          Premium
        </label>
        <br />
        <label htmlFor="length">Length in mm: </label>
        <input ref={lengthRef} type="number" id="length" />
        <br />
        <label htmlFor="width">Width in mm: </label>
        <input ref={widthRef} type="number" id="width" />
        <br />
        <label htmlFor="height">Height in mm: </label>
        <input ref={heightRef} type="number" id="height" />
        <div className="separator"></div>
        <h2 className="sender-info">Sender Info:</h2>
        <label htmlFor="sender-name">Name: </label>
        <input ref={senderNameRef} type="text" id="sender-name" />
        <br />
        <label htmlFor="sender-email">Email: </label>
        <input ref={senderEmailRef} type="text" id="sender-email" />
        <br />
        <label htmlFor="street">Street and number: </label>
        <input ref={senderStreetRef} type="text" id="street" />
        <br />
        <label htmlFor="zipcode">Zipcode: </label>
        <input ref={senderZipRef} type="text" id="zipcode" />
        <br />
        <label htmlFor="city">City: </label>
        <input ref={senderCityRef} type="text" id="city" />
        <br />
        <label htmlFor="country">Country</label>
        <input ref={senderCountryRef} type="text" id="country" />
        <div className="separator"></div>
        <h2 className="receiver-info">Recipient Info:</h2>
        <label htmlFor="rec-name">Name: </label>
        <input ref={recNameRef} type="text" id="rec-name" />
        <br />
        <label htmlFor="rec-street">Street and number: </label>
        <input ref={recStreetRef} type="text" id="rec-street" />
        <br />
        <label htmlFor="rec-zipcode">Zipcode: </label>
        <input ref={recZipRef} type="text" id="rec-zipcode" />
        <br />
        <label htmlFor="rec-city">City: </label>
        <input ref={recCityRef} type="text" id="rec-city" />
        <br />
        <label htmlFor="rec-country">Country</label>
        <input ref={recCountryRef} type="text" id="rec-country" />
        <br />
        <label>Upload label: </label>
        <input type="file" />
        <button onClick={priceAlgo}>Calculate price</button>
        <div className="price">{totalPrice}</div>
        <button onClick={addOrder}>submit</button>
      </form>
      {isClicked
        ? ReactDom.createPortal(
            <PaymentModal closePayment={closePayment} />,
            document.getElementById("payment-root")
          )
        : ""}
    </PlaceStyle>
  );
};

export default PlaceOrder;
