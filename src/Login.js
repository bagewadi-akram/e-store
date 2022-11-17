import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [detailsmatch, setDetailsmatch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3002/profile")
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.warn(err.message, "Error is fetching");
        setError(err.message);
      });
  }, []);

  const userData = details.find((user) => user.email === email);
  if (userData) {
    if (userData.password !== password) {
      // Invalid password
      setDetailsmatch("PassWord Doesn't Match ");
    } else {
      setIsSubmitted(true);
    }
  } else {
    // Username not found
      setDetailsmatch("Email Doesn't Match ");
  }

  const [log, setLog] = useState();

  const signup = () => {
    setLog(true);
  };
  const signin = () => {
    setLog(false);
  };
  const signinForm = (
    <div className="login_container">
      <h1>Sign-In.</h1>

      <form>
        <h5>Email:</h5>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h5>Password:</h5>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <p>
        <input type="checkbox" required /> Remember me !
      </p>
      <button type="submit" className="login_signInButton">
        Sign In
      </button>
      <span onClick={signup} className="login_registerButton">
        Don't have Account Create here!
      </span>
    </div>
  );
  const signupForm = (
    <div className="login_container">
      <h1>Sign-In.</h1>

      <form>
        <h5>Name:</h5>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h5>Email:</h5>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h5>Password:</h5>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <p>
        <input type="checkbox" required /> By Signing-in you agree to Conditions
        of Use & Sales. Please see our Privacy Notice, our Cookies Notice and
        our Interest-Based Ads Notice.
      </p>
      <button type="submit" className="login_signInButton">
        Sign In
      </button>

      <span onClick={signin} className="login_registerButton">
        Have account ! Signin
      </span>
    </div>
  );
  return (
    <>
      <div className="box flx-col aln-itm-cent just-around">
        <Link to="/">
          <img
            className="header_logo"
            src="https://www.dreamhost.com/assets/domains/logo.store.color-b8b6423a038c3ba1b637f437c7b861bd7001bdffb7ecc9c4f39e12203e4122f7.svg"
            alt=""
          />
        </Link>
        {log ? signupForm : signinForm}
      </div>
    </>
  );
}

export default Login;
