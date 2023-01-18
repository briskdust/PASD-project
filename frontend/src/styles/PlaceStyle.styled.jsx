import styled from "styled-components";

const PlaceStyle = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  color: white;

  form {
    margin-top: 100px;
    width: 400px;
    height: 643px;
    background-color: none;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
  }

  label,
  input {
    margin-bottom: 5px;
  }

  .separator {
    border-bottom: 1px solid black;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  button {
    cursor: pointer;
    margin-bottom: 10px;
    color: white;
    background: none;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 17px;
    padding: 7px 12px;
    font-weight: normal;
    margin: 6px 0;
    margin-right: 12px;
    display: inline-block;
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
    min-width: 120px;
  }

  .blabel {
    margin-right: 10px;
  }
`;

export default PlaceStyle;
