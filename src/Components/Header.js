import { useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../Utils/useIsOnline";

const Title = () => {
  return (
    // <h1 className="title" key="h2">
    //   Swad Anusaar
    // </h1>
    <Link to="/">
      <img
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
  return (
    <div className="flex  justify-between bg-slate-300 shadow-lg px-5">
      <Title />
      <div className="nav-items">
        <ul className="flex space-x-10 py-10">
          <li>
            <Link className="" to="/">
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
          <li>Cart</li>
        </ul>
      </div>
      <div className="py-10">{isOnline ? "🟢 online" : "🔴 offline"}</div>
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
