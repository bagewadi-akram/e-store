import React from 'react'
import { useStateValue } from "./StateProvider";
import ProductOpen from './ProductOpen'

function ProductOpenSend() {
  const [{ productopen }, dispatch] = useStateValue();

  return (
    <div>
      {productopen.map((item) => (
        <ProductOpen
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default ProductOpenSend