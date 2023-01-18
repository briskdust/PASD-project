import { useState } from "react";
import PaymentStyle from "../styles/PaymentStyle.styled";

const Payment = props => {
  const mcard_img =
    "https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png";

  const visa_img =
    "https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png";

  const express_img =
    "https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png";

  const alipay_img =
    "https://logos-download.com/wp-content/uploads/2022/01/Alipay_Logo.png";

  const [img_state, setImg] = useState(visa_img);

  const changeImg = e => {
    switch (e.target.value) {
      case "visa":
        setImg(visa_img);
        break;
      case "mcard":
        setImg(mcard_img);
        break;
      case "alipay":
        setImg(alipay_img);
        break;
      default:
        setImg(express_img);
    }
  };

  const closeModal = () => {
    props.close();
  };

  return (
    <PaymentStyle>
      <div className="credit-info-content">
        <table className="half-input-table">
          <tr>
            <td>Please select your card: </td>
            <td>
              <div className="dropdown" id="card-dropdown">
                <select
                  onChange={changeImg}
                  className="dropdown-btn"
                  id="current-card"
                >
                  <option value="visa">Visa</option>
                  <option value="mcard">Master Card</option>
                  <option value="alipay">Alipay</option>
                  <option value="express">American Express</option>
                </select>
              </div>
            </td>
          </tr>
        </table>
        <img
          src={img_state}
          height="80"
          className="credit-card-image"
          id="credit-card-image"
          alt=""
        ></img>
        Card Number
        <input className="input-field"></input>
        Card Holder
        <input className="input-field"></input>
        <table className="half-input-table">
          <tr>
            <td>
              {" "}
              Expires
              <input className="input-field"></input>
            </td>
            <td>
              CVC
              <input className="input-field"></input>
            </td>
          </tr>
        </table>
        <button onClick={closeModal} className="pay-btn">
          Checkout
        </button>
      </div>
    </PaymentStyle>
  );
};

export default Payment;
