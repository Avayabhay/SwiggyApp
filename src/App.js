import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import ErrorPage from "./Components/ErrorPage";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import RestaurentMenu from "./Components/RestaurentMenu";
// import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        //children: [{ element: <Profile name="Name" />, path: "profile" }],
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/restaurent/:id",
        element: <RestaurentMenu />,
      },
    ],
  },
]);

export default App;
