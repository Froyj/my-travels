import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel
          destination="Wonders beach"
          country="Dreamland"
          photo="https://i.ytimg.com/vi/3gkk0hsxAqo/maxresdefault.jpg"
          distance="Not far enough"
          />
        <Travel
          destination="Crusty ridge"
          country="Candy Mountain"
          photo='https://world.wng.org/sites/default/files/styles/article_hero/public/migrated_images/slabcity_1.jpg?itok=dcy9y-EQ'
          distance="Far enough from you "
        />
      </div>
    );
  }
}

export default App;