import { useContext, useEffect, useState } from "react";
import { handelDitailsContext } from "../Main/Main";

import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { cardData } = useContext(handelDitailsContext);
  const { togolBtn } = useContext(handelDitailsContext);
  const [itemsData, setItemsData] = useState(cardData);
  const [mony, setMony] = useState(0);

  useEffect(() => {
    cardData.map((itemCost) => {
      const total = itemCost.price + mony;
      setMony(total);
    });
  }, [cardData]);
  const deletBtn = (id) => {
    console.log(id);
    const deletData = itemsData.filter((i) => i.product_id !== id);
    setItemsData(deletData);
  };
  const sortBtn = () => {
    const dataSort = itemsData.sort((a, b) => b.price - a.price);
    setItemsData(dataSort);
    toast.success("Data sorting success");
  };

  // const { price, product_image, category, description } = cardData;
  return (
    <div className="py-7">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div>
        {togolBtn ? (
          <div className=" flex items-center justify-between">
            <h3 className=" text-xl font-semibold text-center ">Cart</h3>
            <div className=" flex items-center gap-3">
              <h3 className=" text-lg font-semibold text-center">
                Total Cost : {mony}
              </h3>
              <button
                className=" btn text-center text-lg rounded-full border-2"
                onClick={() => sortBtn()}
              >
                Sort by Price
              </button>
              <button className=" btn text-center text-lg rounded-full border-2 bg-violet-500">
                Purchase
              </button>
            </div>
          </div>
        ) : (
          <div className=" text-xl font-semibold">WishList</div>
        )}
      </div>
      <hr className=" my-6" />
      {itemsData.map((data, i) => (
        <div
          key={i}
          className="flex gap-4 mb-4 items-center relative md:w-2/3 lg:w-2/4 mx-auto"
        >
          <div>
            <img
              className="w-[250px] h-[170px] rounded-xl"
              src={data.product_image}
              alt=""
            />
          </div>
          <div className=" space-y-2">
            <h4 className="text-2xl font-semibold ">{data.category}</h4>
            <p>{data.description}</p>
            <p className=" font-semibold">$ {data.price}</p>
            {/*  */}
            <div>
              {togolBtn ? (
                ""
              ) : (
                <div>
                  <button className=" text-lg font-semibold btn rounded-full bg-violet-500">
                    Add to Card
                  </button>
                </div>
              )}
            </div>
          </div>
          <div
            className=" absolute top-1 right-1"
            onClick={() => deletBtn(data.product_id)}
          >
            <button>
              <img
                src="https://img.icons8.com/?size=24&id=99950&format=png"
                alt=""
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
