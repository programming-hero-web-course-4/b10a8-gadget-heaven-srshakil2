import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { createContext } from "react";

export const handelDitailsContext = createContext();
const Main = () => {
  const handelDitailsBtn = () => {
    console.log("hjgjghg");
  };
  console.log(typeof handelDitailsBtn);
  return (
    <handelDitailsContext.Provider value={handelDitailsBtn}>
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
