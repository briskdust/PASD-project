import styled from "styled-components";

const Menu = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

  font-family: "Poppins", sans-serif;
  background-image: url(https://wallpapershome.com/images/wallpapers/macos-big-sur-1280x720-dark-wwdc-2020-22655.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;

  .video-bg {
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .video-bg video {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  img {
    max-width: 100%;
  }

  .app {
    background-color: rgba(16 18 27 / 40%);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    font-size: 15px;
    font-weight: 500;
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
    text-decoration: none;
    color: rgb(113 119 144 / 78%);
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
