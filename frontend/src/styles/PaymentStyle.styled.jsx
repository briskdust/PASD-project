import styled from "styled-components";

const PaymentStyle = styled.div`
  h2 {
    margin-bottom: 0px;
    margin-top: 25px;
    text-align: center;
    font-weight: 200;
    font-size: 19px;
    font-size: 1.2rem;
  }
  .card-container {
    font-family: lato;
    width: 700px;
    height: 60vh;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .dropdown {
    position: relative;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  ul li {
    list-style: none;
    padding-left: 10px;
    cursor: pointer;
  }
  ul li:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .half-input-table {
    border-collapse: collapse;
    width: 100%;
  }
  .half-input-table td:first-of-type {
    border-right: 10px solid #4488dd;
    width: 50%;
  }
  .window {
    height: 540px;
    width: 800px;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    box-shadow: 0px 15px 50px 10px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    z-index: 10;
  }
  .full-width {
    width: 100%;
  }
  .pay-btn {
    border: none;
    background: #22b877;
    line-height: 2em;
    border-radius: 10px;
    font-size: 19px;
    font-size: 1.2rem;
    color: #fff;
    cursor: pointer;
    position: absolute;
    bottom: 25px;
    width: calc(100% - 50px);
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  .pay-btn:hover {
    background: #22a877;
    color: #eee;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .total {
    margin-top: 25px;
    font-size: 20px;
    font-size: 1.3rem;
    position: absolute;
    bottom: 30px;
    right: 27px;
    left: 35px;
  }
  .dense {
    line-height: 1.2em;
    font-size: 16px;
    font-size: 1rem;
  }
  .input-field {
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 10px;
    margin-top: 3px;
    line-height: 1.5em;
    font-size: 20px;
    font-size: 1.3rem;
    border: none;
    padding: 5px 10px 5px 10px;
    color: #fff;
    box-sizing: border-box;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  font-family: lato;
  width: 500px;
  height: 60vh;
  background: #4488dd;
  /* height: 100%; */
  /* width: 50%; */
  color: #eee;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 14px;
  font-size: 0.9rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  box-sizing: border-box;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 30px;
  position: relative;

  .dropdown-btn {
    background: rgba(255, 255, 255, 0.1);
    width: 100%;
    border-radius: 5px;
    text-align: center;
    line-height: 1.5em;
    cursor: pointer;
    position: relative;
    -webkit-transition: background 0.2s ease;
    transition: background 0.2s ease;
  }

  .credit-card-image {
    display: block;
    max-height: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 35px;
    margin-bottom: 15px;
  }
  .credit-info-content {
    margin-top: 25px;
    -webkit-flex-flow: column;
    -ms-flex-flow: column;
    flex-flow: column;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
  }
`;

export default PaymentStyle;

/* 
.dropdown-btn:after {
  content: "\25BE";
  right: 8px;
  position: absolute;
}
.dropdown-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  -webkit-transition: background 0.2s ease;
  transition: background 0.2s ease;
}
*/
