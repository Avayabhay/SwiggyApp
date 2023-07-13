// import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>this is the restuarent that uses swiggy API</p>
      {/* <Outlet /> */}
      <Profile name="ABHAY" />
      <ProfileClass name="ABHAY" />
    </div>
  );
};

export default About;
