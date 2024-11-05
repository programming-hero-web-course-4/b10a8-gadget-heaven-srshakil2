import { useContext } from "react";
import { handelDitailsContext } from "../Main/Main";
import { BsCheckAll, BsCart2 } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { useLoaderData } from "react-router-dom";
const ProductDetails = () => {
  const { handelAddCard } = useContext(handelDitailsContext);
  const { dataItem } = useContext(handelDitailsContext);
  const data = useLoaderData();
  console.log(data);
  const {
    product_title,
    product_image,
    price,
    description,
    rating,
    Specification,
  } = dataItem;
  // console.log(Specification);
  return (
    <div className=" bg-white p-2 shadow-lg  rounded-lg absolute top-64 lg:ml-60 md:ml-40">
      <div className=" flex flex-col lg:flex-row gap-8">
        <img src={product_image} className="max-w-sm rounded-lg shadow-2xl" />
        <div className=" space-y-4">
          <h1 className="text-4xl font-bold">{product_title}</h1>
          <p className=" text-lg font-semibold">Price:$ {price}</p>
          <div className="btn rounded-full w-[150px] border-lime-600 bg-lime-100 font-semibold">
            <button>In Stock</button>
          </div>
          <p className=" font-semibold">{description}</p>
          <div>
            <h5 className=" text-lg font-semibold">Specification :</h5>
            {Specification?.map((data, index) => (
              <p key={index} className=" flex items-center gap-2">
                <span>
                  <BsCheckAll />
                </span>
                <span> {data}</span>
              </p>
            ))}
          </div>
          {/* rating */}
          <div className=" space-y-2">
            <p className=" font-semibold">Rating</p>
            <div className=" space-x-5">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <span className=" text-center bg-gray-200 p-3 rounded-xl">
                {rating}
              </span>
            </div>
          </div>
          {/* btn */}
          <div className=" flex gap-3 items-center">
            <div>
              <button
                onClick={() => handelAddCard(dataItem, "troly")}
                className=" btn flex items-center gap-4 bg-violet-500 text-white px-8 py-3 font-bold rounded-full"
              >
                <span>Add To Card</span>
                <span>
                  <BsCart2 />
                </span>
              </button>
            </div>
            <div>
              <button
                onClick={() => handelAddCard(dataItem, "love")}
                className=" btn bg-gray-400 p-5 rounded-full text-white"
              >
                <ImCart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
