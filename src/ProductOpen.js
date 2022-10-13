import React from "react";
import { useStateValue } from "./StateProvider";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

import './ProductOpen.css'

function ProductOpen({ id, title, image, price }) {
  const [{ productopen  }, dispatch] = useStateValue();
  
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };  

  return (
    <div classNameName="productopen">
     
      <div className="wrapper">
        <div className="product-img">
            <img src={image} height="480" width="400" />
        </div>
        <div className="product-info">
          <div className="product-text">
            
              <h1>{title}</h1>
           
              <h2>{id}</h2>
          </div>
          <div className="product-price-btn">
            <p>
                <span className="span">
                  {price} <strong>$</strong>
                </span>
            </p>
            <Link to="/cart">
              <button onClick={addToBasket}>buy now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOpen;
