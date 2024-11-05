import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { createContext, useState } from "react";

export const handelDitailsContext = createContext();

const Main = () => {
  const [dataItem, setDataItem] = useState();
  const [imgs, setImgs] = useState(true);
  const [cardData, setCardData] = useState([]);
  const [cardNavLove, setCardNavLove] = useState([]);

  // console.log(cardData.length);
  // console.log(dataItem);
  const handelAddCard = (card, name) => {
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
      return;
    }
  };

  return (
    <handelDitailsContext.Provider
      value={{
        handelDitailsBtn,
        dataItem,
        imgs,
        handelAddCard,
        cardData,
        cardNavLove,
      }}
    >
      <div className="w-11/12 mx-auto">
        {/* header */}
        <div>
          <Header></Header>
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
