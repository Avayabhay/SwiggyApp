import { useEffect, useState } from "react";
//import { restaurentList } from "../constants";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurents, setRestaurents] = useState([]);

  const filterRestaurents = (text) => {
    return restaurents.filter((restaurent) =>
      restaurent.data.name.toLowerCase().includes(text)
    );
  };

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
    setRestaurents(json.data.cards[2].data.data.cards);
    console.log(json);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Restaurent"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="search-btn"
          onClick={() => {
            const data = filterRestaurents(searchText.toLowerCase());
            setRestaurents(data);
          }}
        >
          Search
        </button>{" "}
      </div>
      <div className="restaurent-list">
        {restaurents.map((restaurent, index) => {
          return (
            <RestaurentCard
              {...restaurent.data}
              key={restaurent.data?.id + index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
