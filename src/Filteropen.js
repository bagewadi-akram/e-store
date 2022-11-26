import React, { useState } from 'react'
import { useStateValue } from "./StateProvider";
import Product from "./Product";
import "./Filter.css"

 function Filteropen() {
   const [{ filter }] = useStateValue();

   return (
     <div className="fil">
       {filter.map((cate, i) => (
         <Product
           id={cate.category}
           title={cate.title}
           image={cate.image}
           price={cate.price}
         />
       ))}
     </div>
   );
 }

export default Filteropen