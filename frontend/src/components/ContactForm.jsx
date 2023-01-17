import React, { useRef } from "react";
import ContactStyle from "../styles/ContactStyle.styled";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const emailRef = useRef("");
  const nameRef = useRef("");
  const messageRef = useRef("");

  const sendEmail = e => {
    e.preventDefault();
    const recipient = emailRef.current.value;
    console.log(recipient);

    emailjs
      .send(
        "service_z3y8rel",
        "template_r4uz3at",
        {
          name: nameRef.current.value,
          email: recipient,
          message: messageRef.current.value,
        },
        "nQ0BhHK3pHWIfwcvc"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactStyle>
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div class="screen-header-button maximize"></div>
              <div class="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">
                CONTACT INFO : +62 81 314 928 595
              </div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input
                    ref={nameRef}
                    className="app-form-control"
                    placeholder="NAME"
                  />
                </div>
                <div className="app-form-group">
                  <input
                    ref={emailRef}
                    className="app-form-control"
                    placeholder="EMAIL"
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="CONTACT NO"
                  />
                </div>
                <div className="app-form-group message">
                  <input
                    ref={messageRef}
                    className="app-form-control"
                    placeholder="MESSAGE"
                  />
                </div>
                <div className="app-form-group buttons">
                  <button onClick={sendEmail} className="app-form-button">
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
};

export default ContactForm;
