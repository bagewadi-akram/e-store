import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import axios from "axios";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [details, setDetails] = useState([]);
  const [filter, setFilter] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3002/products")
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log("404 ! Error Found", err.message);
      });
  }, []);
  const searchfilteredProducts = details.filter((product) => {
    if (product.category === search) {
      return product;
    }
    // console.log("product", product);
  });
  const addtofilter = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_FILTER",
      filt: searchfilteredProducts,
    });
  };
  const filterProduct = (cat) => {
    dispatch({
      type: "FILTERNULL",
    });
    const updated = details.filter((x) => x.category === cat);
    setFilter(updated);
    console.log("updated", updated);
    dispatch({
      type: "FILTER",
      cate: updated,
    });
  };
  const all = () => {
    dispatch({
      type: "FILTER",
      cate: details,
    });
  };

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
          <input
            type="search"
            placeholder="What are you looking For ?"
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
          />
          {/* {items} */}
          <Link to="/filter">
            <button className="searchbtn" onClick={() => addtofilter()}>
              <SearchIcon />
            </button>
          </Link>

          {search ? (
            <div className="display">
              {searchfilteredProducts.map((product) => (
                <div className="filterresult">
                  <p>{product.title}</p>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </span>
        <Link to="/seller">
          <div className="vendor">
            <p> Seller </p>
            <PermIdentityIcon />
          </div>
        </Link>

        <Link to="/cart">
          <div className="link">
            <ShoppingCartIcon fontSize="large" />
            <p className="count">{basket?.length}</p>
          </div>
        </Link>
        <Link
          to={user && user.length ? "/profile" : "/login"}
          // to="/login"
          style={{ textDecoration: "none" }}
        >
          <div className="link">
            <AccountCircleIcon />{" "}
            <p>
              {user.length === 0 ? (
                "Login"
              ) : (
                <strong>
                  {user.map((detail) => (
                    <>Hello, {detail.name}</>
                  ))}
                </strong>
              )}
            </p>
          </div>
        </Link>
      </div>
      <div className="navbar-two">
        <Link to="/item">
          <span className="category" onClick={() => all()}>
            All
          </span>
        </Link>
        <Link to="/item">
          <span className="category" onClick={() => filterProduct("men")}>
            men
          </span>
        </Link>
        <Link to="/item">
          <span className="category" onClick={() => filterProduct("women")}>
            Women
          </span>
        </Link>
        <Link to="/item">
          <span
            className="category"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </span>
        </Link>
        <Link to="/item">
          <span className="category" onClick={() => filterProduct("jewelery")}>
            Jewelery
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
