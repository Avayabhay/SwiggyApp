import { restaurentList } from "../constants";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  /**
   * SearchBAr
   * Restaurent List
   *  -Restaurent Cards(many)
   *    - Image
   *    - Name
   *    - Cousine
   *    -  Rating
   *
   *
   */
  return (
    <div className="restaurent-list">
      {restaurentList.map((restaurent, index) => {
        return (
          <RestaurentCard
            {...restaurent.data}
            key={restaurent.data?.id + index}
          />
        );
      })}
    </div>
  );
};

export default Body;
