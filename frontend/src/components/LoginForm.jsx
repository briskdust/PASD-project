import Login from "../styles/Login.styled";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

const LoginForm = () => {
  return (
    <Login>
      <input type="radio" name="tab" id="signin" checked="checked" />
      <input type="radio" name="tab" id="register" />
      <div className="pages">
        <div className="page">
          <div className="input">
            <div className="title">
              <i className="material-icons">
                <AccountBoxIcon />
              </i>{" "}
              USERNAME
            </div>
            <input className="text" type="text" placeholder="" />
          </div>
          <div className="input">
            <div className="title">
              <i className="material-icons">
                <LockIcon />
              </i>{" "}
              PASSWORD
            </div>
            <input className="text" type="password" placeholder="" />
          </div>
          <div className="input">
            <button>Enter</button>
          </div>
        </div>
        <div className="page signup">
          <div className="input">
            <div className="title">
              <i className="material-icons">
                <PersonIcon />
              </i>{" "}
              NAME
            </div>
            <input className="text" type="text" placeholder="" />
          </div>
          <div className="input">
            <div className="title">
              <i className="material-icons">
                <EmailIcon />
              </i>{" "}
              EMAIL
            </div>
            <input className="text" type="password" placeholder="" />
          </div>
          <div className="input">
            <button>SIGN ME UP!</button>
          </div>
        </div>
      </div>
      <div className="tabs">
        <label className="tab" for="signin">
          <div className="text">Sign In</div>
        </label>
        <label className="tab" for="register">
          <div className="text">Register</div>
        </label>
      </div>
    </Login>
  );
};
export default LoginForm;
