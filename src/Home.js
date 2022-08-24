import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61sS0RtWD0L._SX1500_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="90829332"
            title="POWER SUPPLY"
            price={249.99}
            image="https://electropotentinfotech.com/NewImages/Embeded.jpg"
            rating={5}
          />
          <Product
            id="3254354345"
            title="USB TO UART"
            price={209.99}
            image="https://electropotentinfotech.com/NewImages/security.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="12321341"
            title="CUSTOMIZE REMOTE CONTROLLER  "
            price={929.99}
            image="https://electropotentinfotech.com/NewImages/desgindevelop.jpg"
            rating={3}
          />
          <Product
            id="49538094"
            title="FREQUENCY GENERATOR"
            price={129.99}
            image="https://electropotentinfotech.com/NewImages/automation.jpg"
            rating={1}
          />
          <Product
            id="4903850"
            title="8051 DEVELOPMENT BOARD"
            price={219.99}
            image="https://electropotentinfotech.com/NewImages/mechnical.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="23445930"
            title="WATER LEVEL CONTROL"
            price={229.99}
            image="https://electropotentinfotech.com/NewImages/aboutus.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
