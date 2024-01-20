import React from "react";
import "./App.css";
import bike1 from "../src/assets/images/slider/bike1.png";
import bike2 from "../src/assets/images/slider/bike2.png";
import bike3 from "../src/assets/images/slider/bike3.png";
import bike4 from "../src/assets/images/slider/bike4.png";
const App = () => {
  return (
    <div>
      <header className="md:container md:mx-auto">
        <nav>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm text-base dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Shop</a>
                  </li>
                  <li>
                    <a>News</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost text-4xl">Biker Zone</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal text-base px-1">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Shop</a>
                </li>
                <li>
                  <a>News</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <a className="btn bg-bike-primary text-white">Login</a>
            </div>
          </div>
        </nav>
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
      </header>
      <main className="md:container md:mx-auto"></main>
      <footer></footer>
    </div>
  );
};

export default App;
