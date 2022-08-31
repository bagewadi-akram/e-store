import React from "react";
import "./Home.css";
import Product from "./Product";
// import Login from "./Login";
import Login_home from "./Login_home";
import Carsoul from "./Carsoul";


function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://people.com/thmb/YNYNIU-erdycuLw6WSbA0zlW2fQ=/1907x480/filters:fill(auto,1)/Header_Shopping-37b684dfe72246f5ab192ad5acafbde6.png"
        alt=""
      />
      <div className="home_row">
        <Product
          id="23445930"
          title="WATER LEVEL CONTROL"
          price={229.99}
          image="https://electropotentinfotech.com/NewImages/aboutus.jpg"
          rating={2}
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
        <Product
          id="23445930"
          title="WATER LEVEL CONTROL"
          price={229.99}
          image="https://electropotentinfotech.com/NewImages/aboutus.jpg"
          rating={2}
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
      <div className="home_container">
        <div className="right_container">
          <div className="section">
            <div className="home_row_heading">
              <h2>Best Sellers </h2>
              <button className="home_row_button">VIEW ALL</button>
            </div>
            <div className="home_row">
              <Carsoul />
            </div>
          </div>
        </div>
        <div className="left_container">
          <Login_home />
        </div>
      </div>
      <div className="section">
        <div className="home_row_heading">
          <h2>Top Trending Brands </h2>
          <button className="home_row_button">VIEW ALL</button>
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
          <Product
            id="49538094"
            title="FREQUENCY GENERATOR"
            price={129.99}
            image="https://electropotentinfotech.com/NewImages/automation.jpg"
            rating={1}
          />
        </div>
      </div>
      <div className="section">
        <div className="home_row_heading">
          <h2>Fashion Top Deals </h2>
          <button className="home_row_button">VIEW ALL</button>
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
          <Product
            id="49538094"
            title="FREQUENCY GENERATOR"
            price={129.99}
            image="https://electropotentinfotech.com/NewImages/automation.jpg"
            rating={1}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
