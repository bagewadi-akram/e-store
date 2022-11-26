import React from "react";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import"./Category.css"

function Category() {
  const [{ api, user }] = useStateValue();
  return (
    <div >
      Hello, {user.map((detail)=>(<strong>{detail.name}</strong>))}
      {api ? (
        <div className="catege">
          {api.map((cate, i) => (
            <Product
              id={cate.category}
              title={cate.title}
              image={cate.image}
              price={cate.price}
            />
          ))}
        </div>
      ) : (
        <p>Please Wait.....🇼</p>
      )}
    </div>
  );
}
export default Category;
