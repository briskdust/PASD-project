import Login from "../styles/Login.styled";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import sanityClient from "../client";

import { sha256 } from "js-sha256";

import { useRef } from "react";

const LoginForm = props => {
  const nothing = () => {};
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const loginRef = useRef("");

  const close = () => {
    props.closed();
  };

  const login = e => {
    e.preventDefault();
  };

  const setLogin = () => {
    const userType = loginRef.current.value.includes("$ADMIN")
      ? "ADMIN"
      : "DRIVER";

    console.log(userType);
    props.login(userType);
    props.closed();
  };

  const register = e => {
    e.preventDefault();
    const password = sha256(passwordRef.current.value);
    const userType = usernameRef.current.value.includes("$ADMIN:")
      ? "ADMIN"
      : "DRIVER";

    const userName = usernameRef.current.value.includes("$ADMIN:")
      ? usernameRef.current.value.substring(7)
      : usernameRef.current.value;

    const doc = {
      _type: "user",
      user_type: userType,
      username: userName,
      email: emailRef.current.value,
      password: password,
    };
    sanityClient.create(doc);

    usernameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
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
            <input className="text" type="text" ref={loginRef} />
          </div>
          <div className="input">
            <div className="title">
              <i className="material-icons">
                <EmailIcon />
              </i>{" "}
              EMAIL
            </div>
            <input className="text" type="text" />
          </div>
          <div className="input">
            <div className="title">
              <i className="material-icons">
                <LockIcon />
              </i>{" "}
              PASSWORD
            </div>
            <input className="text" type="password" />
          </div>
          <div className="input">
            <button onClick={setLogin}>Enter</button>
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
              USERNAME
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
            <div className="title">
              <i className="material-icons">
                <LockIcon />
              </i>{" "}
              PASSWORD
            </div>
            <input className="text" type="password" ref={passwordRef} />
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
