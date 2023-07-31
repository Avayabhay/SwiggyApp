import { IMG_CDN_URL } from "../constants";

const RestaurentCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // const { name, cuisines } = props.restaurant;
  // console.log(name);
  return (
    <div className="card w-52 p-2 m-2 shadow-md bg-green-50 h-72">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt=" Logo" />
      <h2>{name}</h2>
      <h3 className="">{cuisines.join(", ")}</h3>
      <p>{lastMileTravelString} minutes away</p>
    </div>
  );
};

export default RestaurentCard;
