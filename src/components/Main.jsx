import React from "react";
import latest1 from "../assets/images/others/latest1.png";
import latest2 from "../assets/images/others/latest2.png";
import latest3 from "../assets/images/others/latest3.png";
const Main = () => {
  return (
    <div className="md:container md:mx-auto">
      {/* feature bike */}
      <section></section>
      {/* latest bike */}
      <section className="my-32">
        <h3 className="text-5xl text-center font-semibold mb-6">Latest Bikes</h3>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* first card */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={latest1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">Ducati XDIAVEL S-73</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
                fermentum amet faucibus sed id nisi lectus at.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary bg-bike-primary text-white border-none">
                  Read More
                </button>
              </div>
            </div>
          </div>
          {/* second card */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={latest2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">Motorcycles & Scooters</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
                fermentum amet faucibus sed id nisi lectus at.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary bg-bike-primary text-white border-none">
                  Read More
                </button>
              </div>
            </div>
          </div>
          {/* third card */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={latest3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">2021 Honda CBR500R</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
                fermentum amet faucibus sed id nisi lectus at.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary bg-bike-primary text-white border-none">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
