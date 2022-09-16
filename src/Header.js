import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    {!user ? alert("Welcome") : alert("Do you want to log out");}
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f7f9e5ecc6623f3ecbbe_logo-example2.svg"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* <div className="header_nav">
        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionLineTwo">MyOrders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header_basketCount">
              {basket?.length}
            </span>
            <span className="count">{basket?.length}</span>
          </div>
        </Link>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLineOne">
              hello
              {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
      </div> */}
      <div className="header_nav">
        <Link style={{ textDecoration: "none" }} to="/orders">
          <div className="header_option">My orders</div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/checkout">
          <div className="header_option">
            <ShoppingCartIcon />

            <span className="count">{basket?.length}</span>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="">
              <AccountCircleIcon />
            </span>
            {/* {user ? "Sign Out" : "Sign In"} */}
            <span className="">{!user ? "LogIn" : user.email}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
