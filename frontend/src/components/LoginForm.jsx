import Login from "../styles/Login.styled";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import sanityClient from "../client";

import { useRef } from "react";

const LoginForm = props => {
  const nothing = () => {};
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const close = () => {
    props.closed();
  };

  const login = e => {
    e.preventDefault();
  };

  const register = e => {
    e.preventDefault();

    const doc = {
      _type: "user",
      username: usernameRef.current.value,
      email: emailRef.current.value,
    };
    sanityClient.create(doc);

    usernameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <Login>
      <input
        type="radio"
        name="tab"
        id="signin"
        checked="checked"
        onChange={nothing}
      />
      <input type="radio" name="tab" id="register" />
      <div className="pages">
        <div className="page">
          <div className="input">
            <i className="close-icon" id="close" onClick={close}>
              <CloseIcon />
            </i>
            <div className="title">
              <i className="material-icons">
                <AccountBoxIcon />
              </i>{" "}
              USERNAME
            </div>
            <input className="text" type="text" ref={usernameRef} />
          </div>
          <div className="input">
            <div className="title">
              <i className="material-icons">
                <LockIcon />
              </i>{" "}
              PASSWORD
            </div>
            <input className="text" type="password" ref={passwordRef} />
          </div>
          <div className="input">
            <button onClick={login}>Enter</button>
          </div>
        </div>
        <div className="page signup">
          <div className="input">
            <i className="close-icon" id="close" onClick={close}>
              <CloseIcon />
            </i>
            <div className="title">
              <i className="material-icons">
                <PersonIcon />
              </i>{" "}
              NAME
            </div>
            <input className="text" type="text" ref={usernameRef} />
          </div>
          <div className="input">
            <div className="title">
              <i className="material-icons">
                <EmailIcon />
              </i>{" "}
              EMAIL
            </div>
            <input className="text" type="text" ref={emailRef} />
          </div>
          <div className="input">
            <button onClick={register}>SIGN ME UP!</button>
          </div>
        </div>
      </div>
      <div className="tabs">
        <label className="tab" htmlFor="signin">
          <div className="text">Sign In</div>
        </label>
        <label className="tab" htmlFor="register">
          <div className="text">Register</div>
        </label>
      </div>
    </Login>
  );
};
export default LoginForm;
