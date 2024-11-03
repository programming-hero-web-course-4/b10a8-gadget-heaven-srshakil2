import { NavLink } from "react-router-dom";
import { ImCart } from "react-icons/im";
import { GiSelfLove } from "react-icons/gi";
import HederTitel from "./HederTitel";

const Header = () => {
  return (
    <div className="bg-violet-800  px-8 py-5 rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className=" text-center font-bold text-violet-400">
          Gadget Heaven
        </h3>
        {/* home navlink */}
        <div className=" flex items-center justify-center gap-10 text-violet-400">
          <div>
            <NavLink>
              <button>Home</button>
            </NavLink>
          </div>
          <div>
            <NavLink>
              <button>Statistics</button>
            </NavLink>
          </div>
          <div>
            <NavLink>
              <button>Dashboard</button>
            </NavLink>
          </div>
        </div>
        {/* icon */}
        <div className="flex items-center justify-center gap-10">
          <div className="bg-white border-2 p-3 rounded-full">
            <ImCart />
          </div>
          <div className="bg-white border-2 p-3 rounded-full">
            <GiSelfLove />
          </div>
        </div>
      </div>
      <div className="text-center">
        <HederTitel></HederTitel>
      </div>
    </div>
  );
};

export default Header;