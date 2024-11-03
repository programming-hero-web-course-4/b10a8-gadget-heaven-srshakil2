import { useEffect, useState } from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

const Cards = () => {
  const data = useLoaderData();
  const [cardsData, setCardsData] = useState([]);
  //   btn func state
  const [valubtn, setValubtn] = useState("");
  useEffect(() => {
    setCardsData(data);
  }, []);
  //   console.log(cardsData.length);
  //   akhan thake kaj suru
  const cetagorisHandel = (nam) => {
    if (nam === "All Products") {
      setValubtn(nam);
      return;
    } else if (nam === "Phone") {
      setValubtn(nam);
      return;
    } else if (nam === "Laptop") {
      setValubtn(nam);
      return;
    } else if (nam === "Accessories") {
      setValubtn(nam);
      return;
    }
  };
  return (
    <div className=" space-y-10 pt-10">
      <h2 className="text-center text-3xl font-semibold ">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className=" md:flex">
        <div className=" text-nowrap space-y-5 mr-8">
          <div>
            <button
              className={
                valubtn
                  ? "btn btn-accent text-lg rounded-full w-40"
                  : "btn text-lg rounded-full w-40"
              }
              onClick={() => cetagorisHandel("All Products")}
            >
              All Products
            </button>
          </div>
          <div>
            <button
              className={
                valubtn
                  ? "btn btn-accent text-lg rounded-full w-40"
                  : "btn text-lg rounded-full w-40"
              }
              onClick={() => cetagorisHandel("Phone")}
            >
              Phone
            </button>
          </div>
          <div>
            <button
              className={
                valubtn
                  ? "btn btn-accent text-lg rounded-full w-40"
                  : "btn text-lg rounded-full w-40"
              }
              onClick={() => cetagorisHandel("Laptop")}
            >
              Laptop
            </button>
          </div>
          <div>
            <button
              className={
                valubtn
                  ? "btn btn-accent text-lg rounded-full w-40"
                  : "btn text-lg rounded-full w-40"
              }
              onClick={() => cetagorisHandel("Accessories")}
            >
              Accessories
            </button>
          </div>
          <div>
            <button
              className="btn text-lg rounded-full w-40 "
              onClick={() => cetagorisHandel("MacBook")}
            >
              MacBook
            </button>
          </div>
          <div>
            <button
              className="btn text-lg rounded-full w-40 mb-5"
              onClick={() => cetagorisHandel("Iphone")}
            >
              Iphone
            </button>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
          {cardsData.map((carditem, index) => (
            <div className=" card-compact bg-base-100  shadow-xl ">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
