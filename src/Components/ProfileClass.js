import React from "react";
import UserContext from "../Utils/UserContext";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
  }

  render() {
    return (
      <div className="bg-green-200 p-10">
        <h3 className="bg-green-300 p-4 my-3">Class Base Component</h3>
        <div>
          Profile from class based Component created by {this.props.name}
          And here you see Context Value :{" "}
          <UserContext.Consumer>
            {(value) => {
              //console.log(value);
              return (
                <span className="text-red-700 font-bold text-xl">
                  {" "}
                  {value?.user?.name}
                </span>
              );
            }}
          </UserContext.Consumer>
        </div>
        <div>{this.state.count}</div>
        <button onClick={() => this.setState({ count: 1 })}>CLick</button>
        <div className="">COUNT2 : {this.state.count2}</div>
        <button onClick={() => this.setState({ count2: 2, count: 2 })}>
          Click2
        </button>
      </div>
    );
  }
}

export default ProfileClass;
