import React, { Component } from "react";
import { render } from "react-dom";

// import your component and use in here
import HelloWorld from "../src";

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
