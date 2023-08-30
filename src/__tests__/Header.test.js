import { render, screen } from "@testing-library/react";
import Header from "../Components/Header";
import { Provider } from "react-redux";
import store from "../Utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering Header", () => {
  //Load Header
  render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = screen.getAllByTestId("logo");
  expect(logo[0].src).toBe(
    "https://yt3.googleusercontent.com/CUkoQcVTPQZ3uKR9zPbxhm2eupTRoz2u8WKEXBSCxMAfcI2i5D3AcoG0_CcfJAdnCF9Afyfr=s176-c-k-c0x00ffffff-no-rj"
  );
  //console.log(logo);
  //Check if the logo is present in the Header
});

test("Status should be Online when page loads", () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const status = screen.getByTestId("online-status");
  expect(status.innerHTML).toBe("🟢 online");
});

test("Cart should have 0-items when page loads", () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = screen.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 0 Items ");
});
