import { useState } from "react";
import { restaurentList } from "../constants";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurents, setRestaurents] = useState(restaurentList);

  const filterRestaurents = (text) => {
    return restaurentList.filter((restaurent) =>
      restaurent.data.name.toLowerCase().includes(text)
    );
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
