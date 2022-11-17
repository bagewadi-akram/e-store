import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //user database fetched from api
  useEffect(() => {
    axios("http://localhost:3002/profile")
      .then((respo) => {
        setData(respo.data);
      })
      .catch((error) => {
        console.error(error, "Error is fetching");
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const history = useHistory();

  //push to profile
  const openprofile = () => {
    history.push("/profile");
  };
  
  //push to signup
const signup = () => {
  history.push("/signup");
};
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = data.find((user) => user.email === uname.value);
    console.log("uname.value", uname.value);

    
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="email" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <span onClick={signup}>Dont have account SignUp Here !</span>
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
