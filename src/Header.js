import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="navbar">
      <div className="navbar-one">
        <Link to="/">
          <img
            className="header_logo"
            src="https://www.dreamhost.com/assets/domains/logo.store.color-b8b6423a038c3ba1b637f437c7b861bd7001bdffb7ecc9c4f39e12203e4122f7.svg"
            alt=""
          />
        </Link>

        <span className="search">
          <input type="text" placeholder="What are you looking For ?" />
          <button>
            <SearchIcon />
          </button>
        </span>

        <div className="vendor">
          <p> Seller </p>
          <PermIdentityIcon />  
        </div>
        <Link to="/cart">
          <div className="link">
            <ShoppingCartIcon fontSize="large" />
            <p className="count">{basket?.length}</p>
          </div>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <div className="link">
            <AccountCircleIcon /> <p>Profile</p>
          </div>
        </Link>
      </div>
      <div className="navbar-two">
        <span className="category">All</span>
        <span className="category">Men </span>
        <span className="category">Women </span>
        <span className="category">Electronics </span>
        <span className="category">Beauty / Health </span>
        <span className="category">Accessories </span>
      </div>
    </div>
  );
}

export default Header;







