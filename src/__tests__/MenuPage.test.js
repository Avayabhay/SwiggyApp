import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../Utils/store";
import RestaurentMenu from "../Components/RestaurentMenu";
import Header from "../Components/Header";
import { RESTAURANT_MENU } from "../mocks/data";
import { click } from "@testing-library/user-event/dist/click";

global.fetch = () => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_MENU);
    },
  });
};

test("Add items to cart on Menu Page", async () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurentMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(screen.getByTestId("menu")));

  const restaurantMenu = screen.getByTestId("menu");
  const addBTNs = screen.getAllByTestId("add-btn");
  const cart = screen.getByTestId("cart");
  //console.log(cart.innerHTML);
  fireEvent.click(addBTNs[0]);

  expect(cart.innerHTML).toBe("Cart - 1 Items ");
});
