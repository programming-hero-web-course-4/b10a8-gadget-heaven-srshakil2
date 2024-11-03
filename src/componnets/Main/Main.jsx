import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = () => {
  return (
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
  );
};

export default Main;
