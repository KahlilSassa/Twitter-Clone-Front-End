import axios from "axios";
import { useState, useEffect, useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = await {username: username.current.value, email: email.current.value, password:password.current.value, passwordAgain: passwordAgain.current.value};
    console.log(form)
    fetch(process.env.REACT_APP_BACKEND_SERVER + "/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
      credentials: "include",
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("currentUsername", res.currentUsername);
          localStorage.setItem("currentUserId", res.currentUserId);
          setErrorMessage(null);
          navigate("/login");
        } else {
          setErrorMessage(true);
        }
      });
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Cloud.</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Cloud.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="3"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton"  onClick={handleSubmit}>
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
