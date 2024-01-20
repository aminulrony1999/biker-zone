import React from 'react';
import bike1 from "../../src/assets/images/slider/bike1.png";
import bike2 from "../../src/assets/images/slider/bike2.png";
import bike3 from "../../src/assets/images/slider/bike3.png";
import bike4 from "../../src/assets/images/slider/bike4.png";
const Carousel = () => {
    return (
        <div>
        {/* Silder or Carousel */}
        <div className="carousel w-full lg:h-[550px] bg-bike-primary-bg">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-24">
              <div className="space-y-7 flex-1">
                <h2 className="text-6xl font-bold">
                  Ride-on R15 V4 <br />
                  with Smile
                </h2>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <button className="btn bg-bike-primary text-white">
                  Purchase
                </button>
              </div>
              <div className="flex-1">
                <img src={bike1} className="w-[400px]" />
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-24">
              <div className="space-y-7 flex-1">
                <h2 className="text-6xl font-bold">
                  Ride-on R15 V4 <br />
                  with Smile
                </h2>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <button className="btn bg-bike-primary text-white">
                  Purchase
                </button>
              </div>
              <div className="flex-1">
                <img src={bike2} className="w-[400px]" />
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-24">
              <div className="space-y-7 flex-1">
                <h2 className="text-6xl font-bold">
                  Ride-on R15 V4 <br />
                  with Smile
                </h2>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <button className="btn bg-bike-primary text-white">
                  Purchase
                </button>
              </div>
              <div className="flex-1">
                <img src={bike3} className="w-[400px]" />
              </div>
            </div>{" "}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-24">
              <div className="space-y-7 flex-1">
                <h2 className="text-6xl font-bold">
                  Ride-on R15 V4 <br />
                  with Smile
                </h2>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <button className="btn bg-bike-primary text-white">
                  Purchase
                </button>
              </div>
              <div className="flex-1">
                <img src={bike4} className="w-[400px]" />
              </div>
            </div>{" "}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Carousel;