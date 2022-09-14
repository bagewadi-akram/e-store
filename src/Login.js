import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history =useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f7f9e5ecc6623f3ecbbe_logo-example2.svg"
        />
      </Link>
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
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By Signing-in you agree to Conditions of Use & Sales. Please see our
          Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          Create Your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
// export {email, setEmail, password, setPassword, signIn};
