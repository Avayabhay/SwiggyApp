import { IMG_CDN_URL } from "../constants";
// import { useContext } from "react";
// import UserContext from "../Utils/UserContext";

const RestaurentCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // const { name, cuisines } = props.restaurant;
  // console.log(name);

  // const { user } = useContext(UserContext);
  return (
    <div className="card w-52 p-2 m-2 shadow-md bg-green-50 h-72 hover:bg-green-200">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt=" Logo" />
      <h2>{name}</h2>
      <h3 className="">{cuisines.join(", ")}</h3>
      <p>{lastMileTravelString} minutes away</p>
      {/* <span>
        {user.name} - {user.email}
      </span> */}
    </div>
  );
};

export default RestaurentCard;
