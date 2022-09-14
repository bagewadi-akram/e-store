import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  // console.log("this is the basket>>>", basket);  

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p> {title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> 🌟 </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <div className="buttons">
        <button className="buy_now" onClick={addToBasket}>Add to Cart </button>
        <Link to="/checkout">
          <button className="buy_now"> Buy now</button>
        </Link>
      </div>
    </div>
  );
}

export default Product;
