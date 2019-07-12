import React, { Component } from "react";
import { withAuthenticator } from "aws-amplify-react";

class App extends Component {
  state = {
    communities: [
      {
        id: 1,
        name: "Test community",
      },
    ],
  };

  render() {
    const { communities } = this.state;

    return (
      <div className="flex flex-column items-center justify-center pa3 bg-washed-red">
        <h1 className="code f2-1">Forums</h1>
        {/* Community form */}
        <form className="mb3">
          <input
            type="text"
            className="pa2 f4"
            placeholder="Write your community name"
          />
          <button className="pa2 f4" type="submit">
            New Community
          </button>
        </form>

        {/* Community List */}
        <div>
          {communities.map(item => (
            <div key={item.id} className="flex items-center">
              <li className="list pa1 f3">{item.name}</li>
              <button className="bg-transparent bn f4">
                <span>&times;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withAuthenticator(App);
