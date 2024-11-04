import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import DataNotFound from "../ErrorBoundry/DataNotFound";
import Card from "./Card";

const Cards = () => {
  const data = useLoaderData();
  const [cardsData, setCardsData] = useState([]);
  const [btnName, setBtnName] = useState(true);
  useEffect(() => {
    setCardsData(data);
  }, []);
  // console.log(cardsData.length);
  // error route defind korte hobe..
  // console.log(btnName);

  const cetagorisHandel = (nam) => {
    // console.log(nam);
    if (nam) {
      setBtnName(true);
    } else if (!nam) {
      setBtnName(false);
      return;
    }
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
    <div className=" space-y-10 pt-10 mt-72">
      <h2 className="text-center text-3xl font-semibold ">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className=" md:flex ">
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
            <NavLink onClick={() => cetagorisHandel("")}>
              <button className="btn text-lg rounded-full w-40 ">
                MacBook
              </button>
            </NavLink>
          </div>
          <div>
            <NavLink onClick={() => cetagorisHandel("")}>
              <button className="btn text-lg rounded-full w-40 mb-5">
                Iphone
              </button>
            </NavLink>
          </div>
        </div>
        <div>
          {btnName ? (
            <Card cardsData={cardsData}></Card>
          ) : (
            <DataNotFound></DataNotFound>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
