import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import ErrorPage from "./Components/ErrorPage";
//import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import RestaurentMenu from "./Components/RestaurentMenu";
import { lazy, Suspense } from "react";
//import Instamart from "./Components/Instamart";
// import Profile from "./Components/Profile";

const Instamart = lazy(() => import("./Components/Instamart"));
const About = lazy(() => import("./Components/About"));
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
        element: (
          <Suspense fallback={<h1>Loading...!! </h1>}>
            {" "}
            <About />
          </Suspense>
        ),
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
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading...!!</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

export default App;
