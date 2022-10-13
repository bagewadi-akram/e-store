import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";


function Product({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

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
  return (
    <div className="">
      <div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src={image} alt="" />
                <div className="img-info">
                  <Link to="/productopensend">
                    <div className="info-inner" onClick={productOpen}>
                      <span className="p-name">{title}</span>
                      <span className="p-company">{id}</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner"></div>
                </div>

                <a className="addtocart" onClick={addToBasket}>
                  <span className="price">
                    <small>$</small>
                    <strong>{price}</strong>
                  </span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product