import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>this is the restuarent that uses swiggy API</p>
      <Outlet />
    </div>
  );
};

export default About;
