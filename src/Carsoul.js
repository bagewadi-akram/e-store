import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Product from './Product';

 function Carsoul() {
  return (
    <Carousel>
      <div>
        <img
          className="home_image"
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2VzL3dlYnNpdGUvMjAyMi0wNi90cDI4MS1wcmVzZW50YXRpb24tYS0wMi00NjFfMS5qcGc.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="home_image"
          src="https://images.rawpixel.com/image_500/cHJpdmF0ZS9zdGF0aWMvaW1hZ2VzL3dlYnNpdGUvMjAyMi0wNy90cDI4MS1wcmVzZW50YXRpb24tYS0wMS0zOTMuanBn.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="home_image"
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2VzL3dlYnNpdGUvMjAyMi0wNy90cDI4MS1wcmVzZW50YXRpb24tMDIuanBn.jpg"
          alt=""
        />
      </div>
    </Carousel>
  );
}
export default Carousel