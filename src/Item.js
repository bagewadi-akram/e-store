import React, { Component } from "react";
import "./Product.css";
import "./item.css";
import Product from "./Product";

export default class Item extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3002/products").then((response) => {
      response.json().then((result) => {
        this.setState({ list: result });
      });
    });
  }
  render() {

    
    return (
      <div>
        {this.state.list ? (
          <div className="item">
            {this.state.list.map((item, i) => (
              <Product
                id={item.category}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        ) : (
          <p>Please Wait.....🇼</p>
        )}
      </div>
    );
  }
}
