import styled from "styled-components";

const Modal = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-transition: 0.5s;
  overflow: auto;
  transition: all 0.3s linear;

  .modal-open {
    overflow: hidden;
  }
  .is-hidden {
    display: none;
  }
  .is-visuallyHidden {
    opacity: 0;
  }

  .is-blurred {
    filter: blur(2px);
    -webkit-filter: blur(2px);
  }
`;

export default Modal;
