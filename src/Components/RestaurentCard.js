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
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt=" Logo" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes away</h4>
    </div>
  );
};

export default RestaurentCard;
