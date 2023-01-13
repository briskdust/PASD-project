import styled from "styled-components";

const Login = styled.div`
  min-height: 300px;
  max-width: 250px;
  margin: 40px auto;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  -webkit-animation: hi 0.5s;
  animation: hi 0.5s;
  -webkit-transform: translateZ(0px);

  * {
    box-sizing: border-box;
  }

  .pages {
    flex: 1;
    white-space: nowrap;
    position: relative;
    transition: all 0.4s;
    display: flex;
  }
  .pages .page {
    min-width: 100%;
    padding: 20px 15px;
    padding-top: 0px;
    background: linear-gradient(to right, #ff8235, #30e8bf);
  }
  .pages .page:nth-of-type(1) .input {
    transform: translateX(-100%) scale(0.5);
  }
  .pages .page:nth-of-type(2) .input {
    transform: translateX(100%) scale(0.5);
  }
  .pages .page .input {
    transition: all 1s;
    opacity: 0;
    transition-delay: 0s;
  }
  .pages .page.signup {
    background: linear-gradient(to left, #ff8235, #30e8bf);
  }
  .pages .page .title {
    margin-bottom: 10px;
    font-size: 14px;
    position: relative;
    line-height: 14px;
  }
  .pages .page .title i {
    vertical-align: text-bottom;
    font-size: 19px;
  }
  .pages .page .input {
    margin-top: 20px;
  }
  .pages .page input.text {
    background: #f6f7f9;
    border: none;
    border-radius: 4px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0px 10px;
    color: rgba(0, 0, 0, 0.5);
    outline: none;
  }
  .title {
    color: white;
  }

  .close-icon {
    margin-left: 200px;
    cursor: pointer;
    color: white;
  }

  button {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    color: #f6f7f9;
    height: 40px;
    line-height: 40px;
    width: 100%;
    border: none;
    border-radius: 4px;
    font-weight: 600;
  }

  .tabs {
    max-height: 50px;
    height: 50px;
    display: flex;
    background: #fff;
  }
  .tabs .tab {
    flex: 1;
    color: #5d708a;
    cursor: pointer;
    text-align: center;
    line-height: 50px;
    transition: all 0.2s;
    transform: scale(1);
    transition: all 0.2s;
  }
  .tabs .tab .text {
    font-size: 14px;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:nth-of-type(1):checked ~ .tabs .tab:nth-of-type(1) {
    box-shadow: inset -3px 2px 5px rgba(0, 0, 0, 0.25);
    color: #3f4c7f;
  }
  input[type="radio"]:nth-of-type(1):checked ~ .tabs .tab:nth-of-type(1) .text {
    transform: scale(0.9);
  }
  input[type="radio"]:nth-of-type(1):checked ~ .pages {
    transform: translateX(0%);
  }
  input[type="radio"]:nth-of-type(1):checked
    ~ .pages
    .page:nth-of-type(1)
    .input {
    opacity: 1;
    transform: translateX(0%);
    transition: all 0.5s;
  }
  input[type="radio"]:nth-of-type(1):checked
    ~ .pages
    .page:nth-of-type(1)
    .input:nth-child(1) {
    transition-delay: 0.2s;
  }
  input[type="radio"]:nth-of-type(1):checked
    ~ .pages
    .page:nth-of-type(1)
    .input:nth-child(2) {
    transition-delay: 0.4s;
  }
  input[type="radio"]:nth-of-type(1):checked
    ~ .pages
    .page:nth-of-type(1)
    .input:nth-child(3) {
    transition-delay: 0.6s;
  }
  input[type="radio"]:nth-of-type(1):checked
    ~ .pages
    .page:nth-of-type(1)
    .input:nth-child(4) {
    transition-delay: 0.8s;
  }
  input[type="radio"]:nth-of-type(1):checked
    ~ .pages
    .page:nth-of-type(1)
    .input:nth-child(5) {
    transition-delay: 1s;
  }

  input[type="radio"]:nth-of-type(2):checked ~ .tabs .tab:nth-of-type(2) {
    box-shadow: inset 3px 2px 5px rgba(0, 0, 0, 0.25);
    color: #3f4c7f;
  }
  input[type="radio"]:nth-of-type(2):checked ~ .tabs .tab:nth-of-type(2) .text {
    transform: scale(0.9);
  }
  input[type="radio"]:nth-of-type(2):checked ~ .pages {
    transform: translateX(-100%);
  }
  input[type="radio"]:nth-of-type(2):checked
    ~ .pages
    .page:nth-of-type(2)
    .input {
    opacity: 1;
    transform: translateX(0%);
    transition: all 0.5s;
  }
  input[type="radio"]:nth-of-type(2):checked
    ~ .pages
    .page:nth-of-type(2)
    .input:nth-child(1) {
    transition-delay: 0.2s;
  }
  input[type="radio"]:nth-of-type(2):checked
    ~ .pages
    .page:nth-of-type(2)
    .input:nth-child(2) {
    transition-delay: 0.4s;
  }
  input[type="radio"]:nth-of-type(2):checked
    ~ .pages
    .page:nth-of-type(2)
    .input:nth-child(3) {
    transition-delay: 0.6s;
  }
  input[type="radio"]:nth-of-type(2):checked
    ~ .pages
    .page:nth-of-type(2)
    .input:nth-child(4) {
    transition-delay: 0.8s;
  }
  input[type="radio"]:nth-of-type(2):checked
    ~ .pages
    .page:nth-of-type(2)
    .input:nth-child(5) {
    transition-delay: 1s;
  }

  @-webkit-keyframes hi {
    from {
      transform: translateY(50%) scale(0, 0);
      opacity: 0;
    }
  }

  @keyframes hi {
    from {
      transform: translateY(50%) scale(0, 0);
      opacity: 0;
    }
  }
`;

export default Login;
