import React, { Component } from "react";
import Product from "./Product";

 class Category extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3002/products").then((response) => {
      response.json().then((result) => {
        console.log('result', result)
        result.filter((category) => {category.includes('men')})
        this.setState({
          list: result
        });
      });
    });
  }
  
  render() {
    // console.log('this.state', this.state)
    return (
      <div>
        {this.state.list ? (
          <div>
            {this.state.list
              // .filter((category) => category.includes("men"))
              .map((item, i) => (
                <Product
                  id={item.category}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              ))}
          </div>
        ) : (
          <h1>Please Wait...... <br /> While Data is loading </h1>
        )}
       
      </div>
    );
  }
}
export default Category;