import { useState } from "react";
const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="bg-blue-200 p-10">
      <h3 className="bg-blue-300 p-4 my-3">Function Based Component</h3>
      <h2>Hi, This Project is created by {props.name}</h2>
      <div>{count}</div>
      <button onClick={() => setCount(1)}>Click</button>
      <div>Count2 : {count2}</div>
      <button
        onClick={() => {
          setCount2(2);
          setCount(2);
        }}
      >
        Click2
      </button>
    </div>
  );
};

export default Profile;
