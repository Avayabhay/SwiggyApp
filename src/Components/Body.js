import { useEffect, useState } from "react";
//import { restaurentList } from "../constants";
import RestaurentCard from "./RestaurentCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredrestaurents, setFilteredRestaurents] = useState([]);
  const [allRestaurents, setAllRestaurents] = useState([]);

  const filterRestaurents = (text) => {
    return allRestaurents.filter((restaurent) =>
      restaurent?.data?.name?.toLowerCase()?.includes(text.toLowerCase())
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
    setFilteredRestaurents(json.data.cards[2].data.data.cards);
    setAllRestaurents(json.data.cards[2].data.data.cards);
    console.log(json);
  };

  return allRestaurents.length === 0 ? (
    <ShimmerUI />
  ) : (
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
            setFilteredRestaurents(data);
          }}
        >
          Search
        </button>{" "}
      </div>
      <div className="restaurent-list">
        {filteredrestaurents.length === 0 ? (
          <h1>no results</h1>
        ) : (
          filteredrestaurents.map((restaurent) => {
            return (
              <Link
                to={"restaurent/" + restaurent.data?.id}
                key={restaurent.data?.id}
              >
                <RestaurentCard {...restaurent.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
