import { useState, useContext } from "react";
//import { restaurentList } from "../constants";
import RestaurentCard from "./RestaurentCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterRestaurents } from "../Utils/helper";
import useGetAllRestaurents from "../Utils/useGetAllRestaurents";
import useIsOnline from "../Utils/useIsOnline";
import UserContext from "../Utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [allRestaurents, filteredrestaurents, setFilteredRestaurents] =
    useGetAllRestaurents();
  const isOnline = useIsOnline();

  const { user, setUser } = useContext(UserContext);

  if (!isOnline) {
    return <h1 className="">Oops!!! Seems like you're Offline!</h1>;
  }

  return allRestaurents?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="bg-purple-100">
      <div className="search-container p-5 m-2 flex">
        <input
          className="px-2 shadow-sm mx-2 focus:bg-blue-50"
          type="text"
          placeholder="Search Restaurent"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          data-testid="search-btn"
          type="submit"
          className="search-btn px-4 bg-blue-300 rounded-lg shadow-md hover:bg-green-700 hover:text-white"
          onClick={() => {
            const data = filterRestaurents(
              searchText.toLowerCase(),
              allRestaurents
            );
            setFilteredRestaurents(data);
          }}
        >
          Search
        </button>
        <input
          className="px-3 mx-4"
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div
        data-testid="restaurants-list"
        className="restaurent-list flex flex-wrap px-6 mx-3 justify-center"
      >
        {filteredrestaurents?.length === 0 ? (
          <h1>no results</h1>
        ) : (
          filteredrestaurents?.map((restaurent) => {
            return (
              <Link
                // swiggy API changed from restaurant.data to restaurant.info
                to={"restaurent/" + restaurent.info?.id}
                key={restaurent.info?.id}
              >
                <RestaurentCard {...restaurent.info} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
