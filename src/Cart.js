import React from "react";
import "./Cart.css";
import { useStateValue } from "./StateProvider";
import CartProduct from "./CartProduct";
import Subtotal from "./Subtotal";

function Cart() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="cart ">
      <h1>Hello, Welcome Guest </h1>
      <h2>Your Shopping Basket </h2>
      <div className="flx-row just-around ">
        <div className="right flx-col ">
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
        <div className="left">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Cart;
