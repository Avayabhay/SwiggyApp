import { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="navbar">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Help</li>
          <li>Offers</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      )}
    </div>
  );
};

export default Header;
