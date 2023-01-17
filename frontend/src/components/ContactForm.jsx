import React from "react";
import ContactStyle from "../styles/ContactStyle.styled";

const ContactForm = () => {
  return (
    <ContactStyle>
      <div className="row header">
        <h1>CONTACT US &nbsp;</h1>
        <h3>Fill out the form below to learn more!</h3>
      </div>
      <div className="row body">
        <form>
          <ul>
            <li>
              <p className="left">
                <label htmlFor="first_name">first name</label>
                <input type="text" name="first_name" placeholder="John" />
              </p>
              <p class="pull-right">
                <label htmlFor="last_name">last name</label>
                <input type="text" name="last_name" placeholder="Smith" />
              </p>
            </li>

            <li>
              <p>
                <label htmlFor="email">
                  email <span class="req">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john.smith@gmail.com"
                />
              </p>
            </li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              <label htmlFor="comments">comments</label>
              <textarea cols="46" rows="3" name="comments"></textarea>
            </li>

            <li>
              <input className="btn btn-submit" type="submit" value="Submit" />
              <small>
                or press <strong>enter</strong>
              </small>
            </li>
          </ul>
        </form>
      </div>
    </ContactStyle>
  );
};

export default ContactForm;
