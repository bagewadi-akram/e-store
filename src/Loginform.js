import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function App() {
  // React States
  const [data, setData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();

  const openprofile = () => {
    history.push("/profile");
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { name, email, password } = document.forms[0];
    var name = name.value;
    var email = email.value;
    var password = password.value;
    setData({ name, email, password });
    console.log("data", data);
    fetch("http://localhost:3002/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
        // history.push('/profile')

  };
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="name" required />
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="email" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  const loginForm = (
    <div className="box">
      <span>
        <Link to="/">
          <img
            className="header_logo"
            src="https://www.dreamhost.com/assets/domains/logo.store.color-b8b6423a038c3ba1b637f437c7b861bd7001bdffb7ecc9c4f39e12203e4122f7.svg"
            alt=""
          />
        </Link>
      </span>
      <div className="login-form">
        <div className="title">Sign In</div>
        {/* {isSubmitted ? <Profile /> : renderForm} */}
        {isSubmitted ? (
          <div className="flx-col just-bet aln-itm-cent">
            User is successfully logged in
            <button className="buttonsmall" onClick={openprofile}>
              {" "}
              Ok{" "}
            </button>
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
  return (
    <div className="box">
      <span>
        <Link to="/">
          <img
            className="header_logo"
            src="https://www.dreamhost.com/assets/domains/logo.store.color-b8b6423a038c3ba1b637f437c7b861bd7001bdffb7ecc9c4f39e12203e4122f7.svg"
            alt=""
          />
        </Link>
      </span>
      <div className="login-form">
        <div className="title">Sign In</div>
        {/* {isSubmitted ? <Profile /> : renderForm} */}
        {isSubmitted ? (
          <div className="flx-col just-bet aln-itm-cent">
            User is successfully logged in
            <button className="buttonsmall" onClick={openprofile}>
              Ok
            </button>
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default App;
