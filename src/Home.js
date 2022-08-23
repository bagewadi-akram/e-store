import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71JjpVbkmKL._SX3000_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="90829332"
            title="The lean Startup"
            price={249.99}
            image="https://electropotentinfotech.com/NewImages/software.jpg"
            rating={5}
          />
          <Product
            id="3254354345"
            title="The lean Startup akfhjsdf"
            price={209.99}
            image="https://electropotentinfotech.com/NewImages/software.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="12321341"
            title="The lean Startup asfsasff"
            price={929.99}
            image="https://electropotentinfotech.com/NewImages/software.jpg"
            rating={3}
          />
          <Product
            id="49538094"
            title="The lean Startup sadffsafd"
            price={129.99}
            image="https://electropotentinfotech.com/NewImages/software.jpg"
            rating={1}
          />
          <Product
            id="4903850"
            title="The lean Startup fsafretgdsssaes"
            price={219.99}
            image="https://electropotentinfotech.com/NewImages/software.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="23445930"
            title="The lean Startup asrrewqqwwqwq"
            price={229.99}
            image="https://electropotentinfotech.com/NewImages/software.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
