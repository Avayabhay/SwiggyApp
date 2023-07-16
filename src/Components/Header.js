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
        className="logo"
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
    <div className="navbar">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
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
      <div className="">{isOnline ? "🟢" : "🔴"}</div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      )}
    </div>
  );
};

export default Header;
