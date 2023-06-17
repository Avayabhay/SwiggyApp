const Title = () => {
  return (
    // <h1 className="title" key="h2">
    //   Swad Anusaar
    // </h1>
    <a href="/">
      <img
        className="logo"
        src="https://yt3.googleusercontent.com/CUkoQcVTPQZ3uKR9zPbxhm2eupTRoz2u8WKEXBSCxMAfcI2i5D3AcoG0_CcfJAdnCF9Afyfr=s176-c-k-c0x00ffffff-no-rj"
        alt="swad-anusaar-logo"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="navbar">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Help</li>
          <li>Offers</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
