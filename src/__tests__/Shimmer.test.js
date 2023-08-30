import { render, screen } from "@testing-library/react";
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

test("Load Shimmer on HomePage", () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  //const searchBTN = screen.getByTestId("search-btn");
  // console.log(searchBTN);
  const shimmerCards = screen.getAllByTestId("shimmer-card");
  // const shimmerContainer = screen.getByTestId("shimmer-container");
  // expect(shimmerContainer).toBeInTheDocument();
  // console.log(shimmerCards.length);
  expect(shimmerCards.length).toBe(15);
});
