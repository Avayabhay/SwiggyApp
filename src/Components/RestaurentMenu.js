import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MENU_IMG_CDN_URL,
  IMG_CDN_URL,
  MENU_ITEM_FILTER_STRING,
} from "../constants";
import ShimmerUI from "./ShimmerUI";

const RestaurentMenu = () => {
  const params = useParams();
  //console.log(id);

  const [restaurent, setRestaurent] = useState(null);
  const [menuItems, setMenuItems] = useState({});

  useEffect(() => {
    getRestaurentDetails();
  }, []);

  const getRestaurentDetails = async function () {
    var data = await fetch(MENU_IMG_CDN_URL + params.id);
    var dataJSON = await data.json();

    await setRestaurent(dataJSON.data.cards[0].card.card.info);
    let menuItemsInfo =
      dataJSON.data.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards
        .map((x) => x.card?.card)
        .filter((x) => x["@type"] === MENU_ITEM_FILTER_STRING)
        .map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info);

    const uniqueMenuItems = [];
    menuItemsInfo.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });
    await setMenuItems(uniqueMenuItems);
  };

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
