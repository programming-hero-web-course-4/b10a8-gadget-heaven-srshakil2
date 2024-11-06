import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { createContext, useEffect, useState } from "react";
import BannerImg from "../Header2/BannerImg";
import { toast } from "react-toastify";

export const handelDitailsContext = createContext();

const Main = () => {
  const [dataItem, setDataItem] = useState();
  const [imgs, setImgs] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [cardNavLove, setCardNavLove] = useState([]);

  useEffect(() => {
    setImgs(true);
  }, []);
  // togol titel btn
  const [togolBtn, setTogolBtn] = useState(true);
  const togolFun = (names) => {
    if (names === "Cart") {
      setTogolBtn(true);
      return;
    }
    if (names === "Wishlist") {
      setTogolBtn(false);
    }
  };
  // togol titel btn e

  //
  const [titel, setTitel] = useState({
    name: "Upgrade Your Tech Accessorize with Gadget Heaven Accessories",
  });
  //

  // console.log(cardData.length);
  // console.log(dataItem);

  const handelDashboard = (navName) => {
    if (navName === "Home") {
      setImgs(true);
      setTitel({
        name: "Upgrade Your Tech Accessorize with Gadget Heaven Accessories",
      });
    }
    if (navName === "Dashboard") {
      setImgs(false);
      setTitel({
        name: "Dashboard",
      });
    }
    if (navName === "Statistics") {
      setImgs(false);
    }
  };

  const handelAddCard = (card, name) => {
    toast.success("Product adding success");
    // console.log(name);
    if (name === "troly") {
      setCardData([...cardData, card]);
      return;
    } else {
      setCardNavLove([...cardNavLove, card]);
    }
  };
  const handelDitailsBtn = (item) => {
    // console.log(item);
    setDataItem(item);
    if (imgs) {
      setImgs(false);
    }
  };
  // const chartBtn = (n) => {
  //   console.log(n);
  // };

  return (
    <handelDitailsContext.Provider
      value={{
        handelDitailsBtn,
        dataItem,
        imgs,
        handelAddCard,
        cardData,
        cardNavLove,
        handelDashboard,
        titel,
        togolFun,
        togolBtn,
      }}
    >
      <div className="w-11/12 mx-auto">
        {/* header */}
        <div>
          <Header></Header>
          {/* {imgs ? <BannerImg></BannerImg> : ""} */}
        </div>
        {/* outlet */}
        <div>
          <Outlet />
        </div>
        {/* footer */}
        <div>
          <Footer></Footer>
        </div>
      </div>
    </handelDitailsContext.Provider>
  );
};

export default Main;
