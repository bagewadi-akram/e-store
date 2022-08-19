import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        {/* <img
          className="checkout_ad"
          src="https://electropotentinfotech.com/images/about/about-us.png"
          alt=""
        /> */}
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout_right">
        {/* <h2> The subtotal</h2> */}
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;