import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../Utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering Header", () => {
  //Load Header
  const { container } = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(container);
  //Check if the logo is present in the Header
});
