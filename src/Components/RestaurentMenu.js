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

  const handleAddItem = (item) => {
    //console.log(item);
    dispatch(addItem(item));
  };

  //Using Dispatch
  const dispatch = useDispatch();
  return !restaurent ? (
    <ShimmerUI />
  ) : (
    <div className="flex bg-blue-100 px-5 m-5">
      <div className="border-blue-800 bg-gren-100">
        <h1 className="text-3xl font-bold shadow-md m-5 bg-green-100">
          {restaurent.name}
        </h1>
        <img
          src={IMG_CDN_URL + restaurent.cloudinaryImageId}
          alt="restaurent img"
        />

        <h3 className="text-xl font-bold">{restaurent.areaName}</h3>
        <h3 className="font-bold">{restaurent.costForTwoMessage}</h3>
        <h3 className=" font-bold">{restaurent.avgRating} Stars</h3>
      </div>

      <div className="m-5 p-2 bg-green-100">
        <h2 className="text-2xl font-bold">MENU</h2>
        <ul data-testid="menu">
          {Object.values(menuItems).map((item) => (
            <li
              key={item.id}
              className="flex justify-between m-3 bg-green-200 px-4 rounded-sm"
            >
              {item.name} -{" "}
              {
                <button
                  data-testid="add-btn"
                  className="p-2 m-2 bg-green-500 rounded-md"
                  onClick={() => handleAddItem(item)}
                >
                  Add Item
                </button>
              }{" "}
            </li>
          ))}
        </ul>
        {/* {console.log(menuItems)} */}
      </div>
    </div>
  );
};

export default RestaurentMenu;
