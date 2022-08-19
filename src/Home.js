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
            id="1234329"
            title="The lean Startup"
            price={29.99}
            image="https://electropotentinfotech.com/NewImages/software.jpg"
            rating={5}
          />
          <Product
            id="1234320"
            title="The lean Startup"
            price={29.99}
            image="https://electropotentinfotech.com/NewImages/software.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="1234311"
            title="The lean Startup"
            price={29.99}
            image="https://electropotentinfotech.com/NewImages/software.jpg"
            rating={5}
          />
          <Product
            id="1234321"
            title="The lean Startup"
            price={29.99}
            image="https://electropotentinfotech.com/NewImages/software.jpg"
            rating={5}
          />
          <Product
            id="1234341"
            title="The lean Startup"
            price={29.99}
            image="https://electropotentinfotech.com/NewImages/software.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="1234341"
            title="The lean Startup"
            price={29.99}
            image="https://electropotentinfotech.com/NewImages/software.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
