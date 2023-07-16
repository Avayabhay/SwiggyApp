import { useState } from "react";
//import { restaurentList } from "../constants";
import RestaurentCard from "./RestaurentCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterRestaurents } from "../Utils/helper";
import useGetAllRestaurents from "../Utils/useGetAllRestaurents";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [allRestaurents, filteredrestaurents, setFilteredRestaurents] =
    useGetAllRestaurents();

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
            const data = filterRestaurents(
              searchText.toLowerCase(),
              allRestaurents
            );
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
