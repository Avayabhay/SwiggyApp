import React from "react";

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
      <>
        <div>
          Profile from class based Component created by {this.props.name}
        </div>
        <div>{this.state.count}</div>
        <button onClick={() => this.setState({ count: 1 })}>CLick</button>
        <div className="">COUNT2 : {this.state.count2}</div>
        <button onClick={() => this.setState({ count2: 2, count: 2 })}>
          Click2
        </button>
      </>
    );
  }
}

export default ProfileClass;
