import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_IMG_CDN_URL, IMG_CDN_URL } from "../constants";

const RestaurentMenu = () => {
  const params = useParams();
  //console.log(id);

  const [restaurent, setRestaurent] = useState({});

  useEffect(() => {
    getRestaurentDetails();
  }, []);

  const getRestaurentDetails = async function () {
    var data = await fetch(MENU_IMG_CDN_URL + "668135");
    var dataJSON = await data.json();
    await setRestaurent(dataJSON.data.cards[0].card.card.info);
    console.log(dataJSON.data.cards[0].card.card.info);
    //console.log(dataJSON);
    //console.log(restaurent);
    //console.log(params.id);
  };

  return (
    <>
      <div className="restuarenst">
        <img
          src={IMG_CDN_URL + restaurent.cloudinaryImageId}
          alt="restaurent img"
        />
        <h1>Dummy Restaurent :{restaurent.name}</h1>
        <p>Dummy Menu</p>
      </div>
    </>
  );
};

export default RestaurentMenu;
