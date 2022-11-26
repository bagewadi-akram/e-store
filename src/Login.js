import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);
  const [detailsmatch, setDetailsmatch] = useState("");
  const [log, setLog] = useState();
  const [{ user }, dispatch] = useStateValue();
  const [lastName] = useState('');
  const [dob] = useState('');
  const [gender] = useState('');
  const [address] = useState("");
  const [city] = useState("");
  const [state] = useState("");
  const [pincode] = useState("");
    let info = {
      name,
      lastName,
      email,
      password,
      dob,
      gender,
      address,
      city,
      state,
      pincode,
    };

  useEffect(() => {
    axios
      .get("http://localhost:3002/profile")
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const signup = () => {
    setLog(true);
    setDetailsmatch("");
  };
  const signin = () => {
    setLog(false);
    setDetailsmatch("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = details.find((user) => user.email === email);
    if (userData) {
      if (userData.password !== password) {
        // Invalid password
        setDetailsmatch("PassWord Doesn't Match");
      } else {
        history.push("/profile");
        dispatch({
          type: "SET_USER",
          detail: {
            name: userData.name,
            email: email,
          },
        });
      }
    } else {
      // Username not found
      setDetailsmatch("Email Doesn't Match ");
    }
    console.log("email, password", email, password);
  };
  const handleSubmit2 = (event) => {
    event.preventDefault();
    let info = { name, lastName, email, password, dob, gender, address, city, state, pincode };
    fetch("http://localhost:3002/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        setError(err.message);
      });
    history.push("/profile");
    dispatch({
      type: "SET_USER",
      detail: {
        name: name,
        email: email,
      },
    });
  };
  console.log("detailsmatch", detailsmatch);
  const signinForm = (
    <div className="login_container">
      <h1>Sign-In.</h1>
      {!detailsmatch ? "" : <div class="error">{detailsmatch}</div>}

      <form onSubmit={handleSubmit}>
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
        <p>
          <input type="checkbox" required /> Remember me !
        </p>
        <input type="submit" className="login_signInButton" />
      </form>

      <span onClick={signin} className="login_registerButton">
        Don't have Account Create here!
      </span>
    </div>
  );
  const signupForm = (
    <div className="login_container">
      <h1>Sign-Up.</h1>
      {!error ? "" : <div class="error">{error}</div>}
      <form onSubmit={handleSubmit2}>
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

        <p className="para">
          <input type="checkbox" required /> By Signing-in you agree to
          Conditions of Use & Sales. Please see our Privacy Notice, our Cookies
          Notice and our Interest-Based Ads Notice.
        </p>
        <input type="submit" className="login_signInButton" />
      </form>
      <span onClick={signup} className="login_registerButton">
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
        {log ? signinForm : signupForm}
      </div>
    </>
  );
}

export default Login;
