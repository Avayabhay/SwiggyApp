import { render, screen, waitFor } from "@testing-library/react";
import Body from "../Components/Body";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../Utils/store";
import { RESTAURANT_DATA } from "../mocks/data";
import "@testing-library/jest-dom";

global.fetch = () => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
};

test("Load Shimmer on HomePage", async () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  //const searchBTN = screen.getByTestId("search-btn");
  await waitFor(() => expect(screen.getByTestId("search-btn")));
  const RestaurantList = screen.getByTestId("restaurants-list");
  expect(RestaurantList.childNodes.length).toBe(20);
  //const shimmerCards = screen.getAllByTestId("shimmer-card");
});
