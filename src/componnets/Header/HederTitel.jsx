import { useContext } from "react";
import { handelDitailsContext } from "../Main/Main";

const HederTitel = () => {
  const titel = " Upgrade Your Tech Accessorize with Gadget Heaven Accessories";
  const { dataItem } = useContext(handelDitailsContext);

  // console.log(dataItem);

  return (
    <div>
      <div className=" space-y-5 mt-10 pb-64">
        <h1 className="text-white text-3xl font-semibold">
          {!dataItem ? titel : "Product Details"}
        </h1>
        <p className="text-white">
          Explore the latest gadgets that will take your experience to the next
          level. <br /> From smart devices to the coolest accessories, we have
          it all!
        </p>
      </div>
    </div>
  );
};

export default HederTitel;
