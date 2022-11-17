import React, { useState } from "react";
import "./Seller.css";

function Seller() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const create = () => {
    let data = { title, price, description, category, image };
    fetch("http://localhost:3002/products", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flx-row container just-around">
      <div className="information">
        <h1>Signin Now To Avail New Arivals 🛍 </h1>
        <img
          src="https://img.freepik.com/free-photo/shoppers-talking-center_1098-12640.jpg?w=900&t=st=1668256639~exp=1668257239~hmac=bca8acc22996d80e561a051dc38904c78d296abf816be97f783e8150a38c3627"
          alt=""
          className="sellerimage"
        />
      </div>
      <from onSubmit={onchange}>
        <div className="flx-col just-around  from">
          <h1>Add Products Here ↕ </h1>
          <label>Enter your Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label>Enter your Description: </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <label>Enter your Category: </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <label>Enter your price: </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <label>Enter your image url: </label>
          <input
            class="input"
            type="text"
            id="input"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <button type="submit" onClick={create}>
            Submit
          </button>
        </div>
      </from>
    </div>
  );
}

export default Seller;
