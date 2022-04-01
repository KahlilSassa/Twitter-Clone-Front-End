import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../components/apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, dispatch } = useContext(AuthContext);
  let navigate = useNavigate();

  let login = async () => {
    let res = await loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
 
  };


  const handleRegister = async (e) => {
    e.preventDefault();
    navigate('/register')
  }
  
  const handleClick = async (e) => {
    e.preventDefault();
    login();
  };

  console.log(user);
  if(user ){
    navigate('/home')
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Cloud</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Cloud.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="3"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit">
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button onClick={handleRegister} className="loginRegisterButton"> Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
