import React from "react";
import "./Payment.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import ApartmentIcon from "@mui/icons-material/Apartment";
import RoofingIcon from "@mui/icons-material/Roofing";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import NumbersIcon from "@mui/icons-material/Numbers";
import { useState, useEffect } from "react";
import AtmIcon from "@mui/icons-material/Atm";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import PaymentsIcon from "@mui/icons-material/Payments";
import ContactlessIcon from "@mui/icons-material/Contactless";
import { useStateValue } from "./StateProvider";
import axios from "axios";

function Payment() {
  const [{ user }] = useStateValue();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [date, setDate] = useState();
  const [gender, setGender] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [pincode, setPincode] = useState();
  const [page, setPage] = useState(0);
  const [payoption, setPayoption] = useState("");

  const [api, setApi] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/profile")
      .then((res) => {
        setApi(res.data);
      })
      .catch((err) => {
        //  setError(err.message);
        console.log("404 ! Error Found", err.message);
      });
  }, []);
  const submit = (e) => {
    e.preventDefault();
    setPage(1);
    if(user){
    let userr = api.find((user) => user.email === email);
    let ide = userr.id;
    
    let userData = {
      name: firstName,
      lastName: lastName,
      email: email,
      password: userr.password,
      dob: date,
      gender: gender,
      address: address + address2,
      city: city,
      state: state,
      pincode: pincode,
    };
    fetch(`http://localhost:3002/profile/${ide}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("Err.message", err.message);
      });} 
  };
  const makepayment = (
    
    <div className="flx-col aln-itm-cent">
      <h1>Make Your Secure Payment....</h1>
      <div className="flx-row just-around aln-itm-cent payoptions">
        <span>
          <input
            type="radio"
            value="card"
            onChange={(e) => setPayoption(e.target.value)}
          />{" "}
          💳 Credit/Debit
        </span>
        <span>
          <input
            type="radio"
            value="upi"
            onChange={(e) => setPayoption(e.target.value)}
          />
          🏦 UPI
        </span>
        <span>
          <input
            type="radio"
            value="cod"
            onChange={(e) => setPayoption(e.target.value)}
          />
          🚚 Cash On Delivery
        </span>
      </div>
      {payoption === "card" && (
        <div className="boxpay">
          <div className="flx-row aln-itm-cent just-around">
            <h3 className="">Payment Details</h3>
            <div className="flx-row aln-itm-cent just-around paymenticon">
              <AtmIcon />
              <CreditScoreIcon />
              <PaymentsIcon />
              <ContactlessIcon />
            </div>
          </div>
          <div className=" flx-col form aln-itm-cent ">
            <div className="flx-col ">
              <label className="cardnumberlabel p-5">Card Number:</label>
              <input
                type="tel"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                className="cardnumber"
              />
            </div>
            <div className="flx-row just-bet">
              <span className="flx-col cardexpspan p-10 ">
                <label className="p-5">Exp Date:</label>
                <input type="tle" placeholder="MM / YY" className="cardexp" />
              </span>
              <span className=" flx-col cardcvvspan p-10 ">
                <label className="p-5">CVV:</label>
                <input type="tel" placeholder="CVV" className="cardcvv" />
              </span>
            </div>
            <button type="button">PAY</button>
          </div>
        </div>
      )}
      {payoption === "upi" && (
        <div className="boxpay">
          <div className="flx-col p-10">
            <label className="p-10">Enter Your Upi Id Here ↕ </label>
            <input type="text" placeholder="12example@abc" className="p-10" />
          </div>
          <p className="p-10">
            An Link will be sent to your UPI id please open any upi merchent app
            and press pay now ...
          </p>
        </div>
      )}
      {payoption === "cod" && (
        <div className="boxpay flx-col">
          <h1>You have Selected The {payoption}</h1>
          <p className="top-mrgin--10 ">Press ok to confirm</p>
          <button className="ok">OK</button>
        </div>
      )}
    </div>
  );
  const enterdetails = (
    <div className="payment flx-col aln-itm-cent ">
      <form>
        <div className="container">
          <h2>Enter the Order Details.... </h2>
          <h4 className="deladd">Please enter Name, Email : </h4>

          <div className="flx-col just-around aln-itm-cent input-group">
            <div className="flx-row just-around aln-itm-cent fulwid">
              <div className=" input-box">
                <input
                  type="text"
                  placeholder={
                    !user
                      ? user.map((usr) => usr.name)
                      : "Enter Your First Name"
                  }
                  required
                  className="name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <i className="fa fa-user icon">
                  <PersonIcon />
                </i>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="name"
                  onChange={(e) => setLastName(e.target.value)}
                />
                <i className="fa fa-user icon">
                  <PersonIcon />
                </i>
              </div>
            </div>
            <div className="input-box email">
              <input
                type="email"
                placeholder={
                  !user ? user.map((usr) => usr.email) : "Enter email address"
                }
                required
                className="name"
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="fa fa-envelope icon">
                <EmailIcon />
              </i>
            </div>
          </div>
          <div className="flx-row just-around aln-itm-cent">
            <div className="flx-row aln-itm-cent date">
              <h4> Date of Birth:</h4>
              <div className="">
                <input
                  type="date"
                  placeholder="Enter BirthDate"
                  className="dob"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="flx-row aln-itm-cent just-around date">
              <h4> Gender:</h4>
              <div className="">
                <input
                  type="radio"
                  value="Male"
                  // checked={value.gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
                <input
                  type="radio"
                  value="Female"
                  // checked={value.gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </div>
            </div>
          </div>

          <h4 className="deladd">Enter the Delivery Address:</h4>
          <div className="addres flx-col">
            <input
              type="text"
              placeholder="Address Field 1"
              className="adressfield"
              onChange={(e) => setAddress(e.target.value)}
            />
            <span>
              <ApartmentIcon />
            </span>
            <input
              type="text"
              placeholder="Address Field 2"
              className="adressfield"
              onChange={(e) => setAddress2(e.target.value)}
            />
            <div className="flx-row  aln-itm-cent city">
              <h4>City:</h4>
              <div className="pos-rel">
                <span className="flx-row aln-itm-cent iconcity">
                  <RoofingIcon />
                </span>
                <input
                  type="text"
                  placeholder="City"
                  className="adressfield"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <h4>State:</h4>
              <div className="pos-rel">
                <span className="flx-row aln-itm-cent iconcity">
                  <TravelExploreIcon />
                </span>
                <input
                  type="text"
                  placeholder="State"
                  className="adressfield"
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <h4>PinCode:</h4>
              <div className="pos-rel">
                <span className="flx-row aln-itm-cent iconcity">
                  <NumbersIcon />
                </span>
                <input
                  type="tel"
                  placeholder="Pin Code"
                  className="adressfield"
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button className="paybuton" type="submit" onClick={submit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      {/* <h2>
        Hii,{" "}
        {user.map((detail) => (
          <strong>{detail.name}</strong>
        ))} <br/>
        Add the Order details and Procced to Pay
      </h2> */}
      {page === 0 ? enterdetails : makepayment}
    </div>
  );
}

export default Payment;
