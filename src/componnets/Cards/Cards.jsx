import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useRouteLoaderData } from "react-router-dom";

const Cards = () => {
  const data = useLoaderData();
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    setCardsData(data);
  }, []);
  // console.log(cardsData.length);
  // error route defind korte hobe..

  const cetagorisHandel = (nam) => {
    console.log(nam);
    if (nam === "All Products") {
      setCardsData(data);
      return;
    }
    if (nam === "Phone") {
      const filterPhone = data.filter((item) => item.category === nam);
      setCardsData(filterPhone);
      return;
    }
    if (nam === "Accessories") {
      const filterAccessories = data.filter((item) => item.category === nam);
      setCardsData(filterAccessories);
      return;
    }
    if (nam === "Laptop") {
      const filterLaptop = data.filter((item) => item.category === nam);
      setCardsData(filterLaptop);
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
            <NavLink onClick={() => cetagorisHandel("All Products")}>
              <button className="btn text-lg rounded-full w-40">
                All Products
              </button>
            </NavLink>
          </div>
          <div>
            <NavLink onClick={() => cetagorisHandel("Phone")}>
              <button className="btn text-lg rounded-full w-40">Phone</button>
            </NavLink>
          </div>
          <div>
            <NavLink onClick={() => cetagorisHandel("Laptop")}>
              <button className="btn text-lg rounded-full w-40">Laptop</button>
            </NavLink>
          </div>
          <div>
            <NavLink onClick={() => cetagorisHandel("Accessories")}>
              <button className="btn text-lg rounded-full w-40">
                Accessories
              </button>
            </NavLink>
          </div>
          <div>
            <NavLink onClick={() => cetagorisHandel("MacBook")}>
              <button className="btn text-lg rounded-full w-40 ">
                MacBook
              </button>
            </NavLink>
          </div>
          <div>
            <NavLink onClick={() => cetagorisHandel("Iphone")}>
              <button className="btn text-lg rounded-full w-40 mb-5">
                Iphone
              </button>
            </NavLink>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
          {cardsData.map((carditem) => (
            <div
              className=" card-compact bg-base-100  shadow-xl rounded-lg"
              key={carditem.product_id}
            >
              <figure>
                <img
                  className="h-[200px] w-full object-fill p-3 rounded-3xl"
                  src={carditem.product_image}
                  alt=""
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title ">{carditem.product_title}</h2>
                <p>{carditem.description}</p>
                <p>{carditem.price} $</p>
                <div>
                  <button className="btn rounded-full border-violet-600">
                    Products Ditails
                  </button>
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
