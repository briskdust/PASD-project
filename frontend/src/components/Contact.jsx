import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    const recipient = form.current.recipient_email.value;
    console.log(recipient);

    emailjs
      .send(
        "service_z3y8rel",
        "template_r4uz3at",
        {
          name: "Kevin",
          email: recipient,
          message: "hello",
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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <input type="text" name="recipient_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
