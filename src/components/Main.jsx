import React from "react";
const Main = () => {
  return (
    <div className="md:container md:mx-auto">
      {/* feature bike */}
      <section></section>
      {/* latest bike */}
      <section className="my-32">
        <h3 className="text-5xl text-center font-semibold">Latest Bikes</h3>
        <div>
          {/* first card */}
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
