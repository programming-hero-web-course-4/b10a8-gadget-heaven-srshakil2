import { useContext } from "react";
import { handelDitailsContext } from "../Main/Main";

const HederTitel = () => {
  const { titel } = useContext(handelDitailsContext);
  const { togolFun } = useContext(handelDitailsContext);
  const { name } = titel;

  // console.log(dataItem.length);

  return (
    <div>
      <div className=" space-y-5 mt-10 pb-56">
        <h1 className="text-white text-3xl font-semibold">{name}</h1>
        <p className="text-white">
          Explore the latest gadgets that will take your experience to the next
          level. <br /> From smart devices to the coolest accessories, we have
          it all!
        </p>
        <div>
          {name === "Dashboard" ? (
            <div className=" space-x-3 ">
              <button
                onClick={() => togolFun("Cart")}
                className="btn  text-center rounded-full "
              >
                Cart
              </button>
              <button
                onClick={() => togolFun("Wishlist")}
                className="btn rounded-full text-center "
              >
                Wishlist
              </button>
            </div>
          ) : (
            <button className="btn rounded-full text-center ">Shop Now</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HederTitel;
