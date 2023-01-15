import styled from "styled-components";

const MapSet = styled.div`
  margin-top: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;

  .botton-set {
    width: 800px;
    margin-top: 20px;
  }

  .f-row {
    display: flex;
    justify-content: center;
  }

  .s-row {
    display: flex;
    justify-content: flex-start;
    margin-left: 100px;
    margin-top: 5px;
  }

  .distance,
  .duration {
    margin-left: 30px;
  }

  .distance {
    margin-right: 77px;
  }

  .calc-route {
    background: none;
    border: none;
  }

  .map-box {
    position: center;
    left: 0;
    top: 0;
    height: 50%;
    width: 50%;
  }

  .clickable {
    color: white;
    cursor: pointer;
    margin-left: 24px;
  }
`;

export default MapSet;
