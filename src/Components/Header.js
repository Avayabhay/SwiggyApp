import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../Utils/useIsOnline";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
import store from "../Utils/store";

const Title = () => {
  return (
    // <h1 className="title" key="h2">
    //   Swad Anusaar
    // </h1>
    <Link to="/">
      <img
        data-testid="logo"
        className="h-28 px-3 "
        src="https://yt3.googleusercontent.com/CUkoQcVTPQZ3uKR9zPbxhm2eupTRoz2u8WKEXBSCxMAfcI2i5D3AcoG0_CcfJAdnCF9Afyfr=s176-c-k-c0x00ffffff-no-rj"
        alt="swad-anusaar-logo"
      />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useIsOnline();

  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex  justify-between bg-slate-300 shadow-lg px-5">
      <Title />
      <div className="nav-items">
        <ul className="flex space-x-10 py-10">
          <li>
            <Link className="hover:text-red-900" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>Offers</li>
          <li>
            <Link to="/cart">Cart - {cartItems.length} Items </Link>
          </li>
        </ul>
      </div>
      <div className="py-10">{isOnline ? "🟢 online" : "🔴 offline"}</div>
      <div className="py-10">Hi {user.name}</div>
      {isLoggedIn ? (
        <button className="p-4" onClick={() => setIsLoggedIn(false)}>
          Log Out
        </button>
      ) : (
        <button className="p-4" onClick={() => setIsLoggedIn(true)}>
          Log In
        </button>
      )}
    </div>
  );
};

export default Header;
