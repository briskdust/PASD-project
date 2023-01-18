import styled from "styled-components";

const Menu = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
  padding: 50px 70px 50px 70px;

  font-family: "Poppins", sans-serif;
  background: -webkit-linear-gradient(to right, #ff8235, #30e8bf);
  background: linear-gradient(to right, #ff8235, #30e8bf);

  width: 100%;
  height: 100vh;
  z-index: 2000;

  .app {
    background-color: rgba(16 18 27 / 40%);
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    font-size: 15px;
    font-weight: 500;

    .log-btn {
      background: none;
      font-size: 15px;
      color: white;
      border: none;
      cursor: pointer;
      margin-left: 520px;
    }
  }

  .fetch-orders {
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
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    margin-top: 40px;
  }

  .register-delivery {
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
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    margin-top: 70px;
  }

  .header {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 58px;
    width: 100%;
    border-bottom: 1px solid rgba(113 119 144 / 25%);
    padding: 0 30px;
    white-space: nowrap;
  }

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
  }

  .header-menu a {
    padding: 20px 30px;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: #c9c8c8;
    border-bottom: 2px solid transparent;
    transition: 0.3s;
  }

  a.active,
  a:hover {
    color: #f9fafb;
    border-bottom: 2px solid #f9fafb;
  }
`;

export default Menu;
