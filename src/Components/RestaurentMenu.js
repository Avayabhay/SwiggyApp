import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import ShimmerUI from "./ShimmerUI";
import useRestaurent from "../Utils/useRestaurent";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const RestaurentMenu = () => {
  const { id } = useParams();
  //console.log(id);

  const [restaurent, menuItems] = useRestaurent(id);

  const handleAddItem = () => {
    dispatch(addItem("Grapes"));
  };

  //Using Dispatch
  const dispatch = useDispatch();
  return !restaurent ? (
    <ShimmerUI />
  ) : (
    <div className="restaurent-menu">
      <div>
        <h1>{restaurent.name}</h1>
        <img
          src={IMG_CDN_URL + restaurent.cloudinaryImageId}
          alt="restaurent img"
        />

        <h3>{restaurent.areaName}</h3>
        <h3>{restaurent.costForTwoMessage}</h3>
        <h3>{restaurent.avgRating} Stars</h3>
      </div>

      <button
        className="p-2 m-4 bg-blue-400 rounded-md"
        onClick={() => handleAddItem()}
      >
        Add Grapes
      </button>

      <div className="restaurent-menu-items">
        <h2>MENU</h2>
        <ul>
          {Object.values(menuItems).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        {console.log(menuItems)}
      </div>
    </div>
  );
};

export default RestaurentMenu;
