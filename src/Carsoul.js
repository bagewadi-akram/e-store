import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Product from './Product';

export default function Carsoul() {
  return (
    <Carousel>
      <div>
        <Product
          id="12321341"
          title="CUSTOMIZE REMOTE CONTROLLER  "
          price={929.99}
          image="https://electropotentinfotech.com/NewImages/desgindevelop.jpg"
          rating={3}
        />
      </div>
      <div>
        <Product
          id="12321341"
          title="CUSTOMIZE REMOTE CONTROLLER  "
          price={929.99}
          image="https://electropotentinfotech.com/NewImages/desgindevelop.jpg"
          rating={3}
        />
      </div>
      <div>
        <Product
          id="12321341"
          title="CUSTOMIZE REMOTE CONTROLLER  "
          price={929.99}
          image="https://electropotentinfotech.com/NewImages/desgindevelop.jpg"
          rating={3}
        />
      </div>
    </Carousel>
  );
}
