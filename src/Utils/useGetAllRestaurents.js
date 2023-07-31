import { useState, useEffect } from "react";
const useGetAllRestaurents = () => {
  const [filteredrestaurents, setFilteredRestaurents] = useState([]);
  const [allRestaurents, setAllRestaurents] = useState([]);

  //Use Effects
  useEffect(() => {
    // Get the data from the API
    getRestaurenets();
  }, []);

  const getRestaurenets = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.984048&lng=77.7481552&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // setFilteredRestaurents(json.data.cards[2].data.data.cards);
    // setAllRestaurents(json.data.cards[2].data.data.cards);
    // Updating the API as swiggy changed its own
    setFilteredRestaurents(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurents(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };

  return [allRestaurents, filteredrestaurents, setFilteredRestaurents];
};

export default useGetAllRestaurents;
