import styled from "styled-components";

const Tracking = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  margin-top: 40px;

  .container {
    border-radius: 10px;
    background-color: white;
    height: 600px;
    width: 500px;
  }

  header {
    padding: 0.5em;
    margin-top: 20px;
    text-align: center;
  }

  h1 {
    color: #343779;
    font-weight: 300;
  }

  h3,
  .current {
    color: #33a9ac;
    margin-top: 10px;
    font-weight: 150;
  }

  .content {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .complete {
    color: #343779;
  }

  .pending {
    color: #c9c9c9;
  }

  .border-left {
    border-style: solid;
    border-width: 0 0 0 0.2em;
    border-color: #343779;
    width: 90%;
    padding-left: 7px;
    height: 200px;

    margin-top: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .margin-top {
    margin-top: 3em;
  }

  .no-margin-bottom {
    margin-bottom: 0;
  }

  .wide {
    width: 95%;
  }

  .icon {
    opacity: 0.65;
  }

  .row {
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 240px;
    height: 240px;
    transform: translateX(-10px);
  }

  .control-set {
    margin-top: 5px;
  }

  .control-btn {
    background: none;
    border: none;
    margin-right: 20px;
    cursor: pointer;
  }
`;

export default Tracking;
