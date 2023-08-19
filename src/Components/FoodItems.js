import { IMG_CDN_URL } from "../constants";

const FoodItems = ({ name, defaultPrice, price, imageId, description }) => {
  return (
    <>
      <div className="flex  border m-4 px-4 border-blue-700 bg-slate-300">
        <img src={IMG_CDN_URL + imageId} className="h-36 p-2 m-2" alt="food" />
        <div className="self-center m-2 p-2">
          <div className="text-xl font-bold"> {name}</div>
          <div className="">{description}</div>
          <div className=" font-bold">
            Price : Rs {(defaultPrice == null ? price : defaultPrice) / 100}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItems;
