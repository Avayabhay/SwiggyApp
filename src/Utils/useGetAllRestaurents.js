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
    setFilteredRestaurents(json.data.cards[2].data.data.cards);
    setAllRestaurents(json.data.cards[2].data.data.cards);
    console.log(json);
  };

  return [allRestaurents, filteredrestaurents, setFilteredRestaurents];
};

export default useGetAllRestaurents;
