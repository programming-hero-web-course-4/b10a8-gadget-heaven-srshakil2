import { useContext } from "react";
import { handelDitailsContext } from "../Main/Main";
import { NavLink } from "react-router-dom";

const Card = ({ cardsData }) => {
  const { handelDitailsBtn } = useContext(handelDitailsContext);
  //   console.log(typeof handelDitailsBtn);
  return (
    <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
      {cardsData.map((carditem) => (
        <div
          className=" card-compact bg-base-100  shadow-xl rounded-lg"
          key={carditem.product_id}
        >
          <figure>
            <img
              className="h-[200px] w-full object-fill p-3 rounded-3xl"
              src={carditem.product_image}
              alt=""
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title ">{carditem.product_title}</h2>
            <p>{carditem.description}</p>
            <p>{carditem.price} $</p>
            <div>
              <NavLink
                to={"/details"}
                onClick={() => handelDitailsBtn(carditem)}
              >
                <button className="btn rounded-full border-violet-600">
                  Products Ditails
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
