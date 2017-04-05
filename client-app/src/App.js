import React, { Component } from "react";
import Subscriptions from "./views/Subscriptions";
import About from "./views/About";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeView: <Subscriptions />
    };
  }
  updateActiveChild = (component) => {
    this.setState({activeView: component})
  }
  render() {
    return (
      <div>
        <h1>APP</h1>
        <div>
          <button onClick={this.updateActiveChild.bind(this, <Subscriptions />)}>Subscriptions</button>
          <button onClick={this.updateActiveChild.bind(this, <About />)}>About</button>
        </div>
        {this.state.activeView}
      </div>
    );
  }
}

export default App
