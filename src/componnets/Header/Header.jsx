import { NavLink } from "react-router-dom";
import { ImCart } from "react-icons/im";
import { GiSelfLove } from "react-icons/gi";
import HederTitel from "./HederTitel";
//
import { useContext } from "react";
import { handelDitailsContext } from "../Main/Main";
import BannerImg from "../Header2/BannerImg";
import { Helmet } from "react-helmet";
//

const Header = () => {
  const { handelDashboard } = useContext(handelDitailsContext);
  // const { chartBtn } = useContext(handelDitailsContext);
  const { imgs } = useContext(handelDitailsContext);
  const { cardData } = useContext(handelDitailsContext);
  const { cardNavLove } = useContext(handelDitailsContext);

  // console.log(cardNavLove.length);
  // console.log(imgs);
  return (
    <div className="bg-violet-800 mt-3  rounded-xl">
      <Helmet>
        <title>Gadget Heaven</title>
      </Helmet>
      <div className="  flex items-center justify-between px-8 py-5">
        <h3 className=" text-center font-bold text-violet-400">
          Gadget Heaven
        </h3>
        {/* home navlink */}
        <div className=" flex items-center justify-center gap-10 text-violet-400">
          <div>
            <NavLink to={"/"} onClick={() => handelDashboard("Home")}>
              <button>Home</button>
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/chart"}
              onClick={() => handelDashboard("Statistics")}
            >
              <button>Statistics</button>
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/dashboard"}
              onClick={() => handelDashboard("Dashboard")}
            >
              <button>Dashboard</button>
            </NavLink>
          </div>
        </div>
        {/* icon */}
        <div className="flex items-center justify-center gap-10">
          <div className="bg-white border-2 p-3 rounded-full relative">
            <p className=" absolute top-0 right-1 font-semibold">
              {cardData.length}
            </p>
            <p>
              <ImCart />
            </p>
          </div>
          <div className="bg-white border-2 p-3 rounded-full relative">
            <p className=" font-semibold absolute top-0 right-1">
              {cardNavLove.length}
            </p>
            <p>
              <GiSelfLove />
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <HederTitel></HederTitel>
      </div>
      <div>{imgs ? <BannerImg></BannerImg> : ""}</div>
    </div>
  );
};

export default Header;
