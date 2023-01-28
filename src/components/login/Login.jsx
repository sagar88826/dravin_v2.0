import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="Login-box">
      <img src="images/logo.png"></img>
      <h1 className="Login-box__header">Login</h1>
      <form>
        <div className="Login-box__form-content">
          <label htmlFor="username">Username</label>
          <br></br>
          <input id="username"></input>
        </div>
        <div className="Login-box__form-content">
          <label htmlFor="password">Password</label>
          <br></br>
          <input id="password"></input>
        </div>

        <button className="btn-login">Login</button>

        <p className="text-login">
          Don't have account <a href="/">Register</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
