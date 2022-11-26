import React from "react";
import "./Profile.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useStateValue } from "./StateProvider";
import CartProduct from "./CartProduct";
import LogoutIcon from "@mui/icons-material/Logout";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PaymentsIcon from "@mui/icons-material/Payments";
import { useHistory } from "react-router-dom";



function Profile({ id, title, image, price }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory()
const logOut = () => {
  dispatch({
    type: "EMPTY_USER",
  });
  history.push("/login")
};
 
  return (
    <div className="profile">
      <div className="usrname flx-row aln-itm-cent">
        <div className="profileicon">
          <AccountCircleIcon />
        </div>
        <div className="userdetails">
          {user.map((detail) => (
            <>
              <h1>{detail.name}</h1>
              <p>{detail.email}</p>
            </>
          ))}
          {/* <p>{user.email}</p> */}
        </div>
        <div className="logout" onClick={logOut}>
          <LogoutIcon fontSize="large" />
        </div>
      </div>
      <div className="orders flx-col aln-itm-cent">
        <h2>Order history .....</h2>
        {/* <p>You have not ordered any Product yet</p>
        <h5>Go for Shopping 🛍 </h5> */}
        {basket.map((item) => (
          <CartProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="contact flx-col aln-itm-cent">
        <h2>Contact Us</h2>
        <div className="flx-row just-around fulwid ">
          <div className="contactcont flx-row aln-itm-cent">
            <img
              src="https://www.dreamhost.com/assets/domains/logo.store.color-b8b6423a038c3ba1b637f437c7b861bd7001bdffb7ecc9c4f39e12203e4122f7.svg"
              alt=""
              width="80px"
              height="20px"
            />
            <span className="number">
              <h4>Call us on </h4>
              <p>1800 128 321</p>
            </span>
          </div>
          <div className="contactcont flx-row aln-itm-cent">
            <img
              src="https://www.dreamhost.com/assets/domains/logo.store.color-b8b6423a038c3ba1b637f437c7b861bd7001bdffb7ecc9c4f39e12203e4122f7.svg"
              alt=""
              width="80px"
              height="20px"
            />
            <span className="number">
              <h4>Feel Free to Email</h4>
              <p>yourstore@store.com</p>
            </span>
          </div>
        </div>
      </div>
      <div className="payment">
        <h2>WE ACCEPT :</h2>
        <div className="flx-row just-around ">
          <span className="paymenticon">
            <CreditScoreIcon fontSize="large" />
            <p>Debit/Credit card</p>
          </span>
          <span className="paymenticon">
            <BookOnlineIcon fontSize="large" />
            <p>NetBanking</p>
          </span>
          <span className="paymenticon">
            <AccountBalanceWalletIcon fontSize="large" />
            <p>UPI / Wallets</p>
          </span>
          <span className="paymenticon">
            <PaymentsIcon fontSize="large" />
            <p>EMI's / Pay Later</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
      