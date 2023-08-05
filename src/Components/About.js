// import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

const About = () => {
  return (
    <div className="bg-green-100">
      <h1 className="text-3xl font-bold text-center px-10 py-4 underline">
        About Page
      </h1>
      <p>this is the restuarent that uses swiggy API</p>
      {/* <Outlet /> */}
      <Profile name="ABHAY" />
      <ProfileClass name="ABHAY" />
    </div>
  );
};

export default About;
