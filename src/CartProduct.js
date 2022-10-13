import { StrikethroughS } from "@mui/icons-material";
import React from "react";
// import './bootstrap.css'
import "./CartProduct.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";


function CartProduct({ id, title, image, price }) {
  const [{ basket,  }, dispatch] = useStateValue();
  const productOpen = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "PRODUCT_OPEN",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="flx-row just-around cartproduct">
      <div className="dataside flx-row just-around ">
        <div className="pic">
          <img className="" src={image} width="250px" height="250px" />
        </div>

        <div className="data">
          <Link to="/productopensend" style={{ textDecoration: "none" }}>
            <h1 onClick={productOpen}> {title}</h1>
          </Link>
          <p>Pack of 1 on 1 </p>
          <br />
          <p>Sold by : {id}</p>

          <span className="flx-row pric">
            <strong>$</strong>
            <small>{price}</small>
          </span>

          <h4>Get Free On order Above 599 🎉 🎉 </h4>
          <button onClick={removeFromBasket}>Remove from Cart</button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
