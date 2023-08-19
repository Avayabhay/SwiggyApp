import { useState, useEffect } from "react";
import { MENU_IMG_CDN_URL, MENU_ITEM_FILTER_STRING } from "../constants";

const useRestaurent = (resId) => {
  const [restaurent, setRestaurent] = useState(null);
  const [menuItems, setMenuItems] = useState({});

  useEffect(() => {
    getRestaurentDetails();
  }, []);

  const getRestaurentDetails = async function () {
    var data = await fetch(MENU_IMG_CDN_URL + resId);
    var dataJSON = await data.json();

    await setRestaurent(dataJSON.data.cards[0].card.card.info);
    let menuItemsInfo =
      dataJSON.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .map((x) => x.card?.card)
        .filter((x) => x["@type"] === MENU_ITEM_FILTER_STRING)
        .map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info);

    const uniqueMenuItems = [];
    // console.log(menuItemsInfo);
    if (menuItemsInfo) {
      menuItemsInfo.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
    }

    await setMenuItems(uniqueMenuItems);
  };

  return [restaurent, menuItems];
};

export default useRestaurent;
