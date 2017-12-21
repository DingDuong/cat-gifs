import React, { Component } from 'react';
import './App.css';
import CatGifList from "./CatGifList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">OMG CATZ</h1>
        </header>
        <CatGifList />
      </div>
    );
  }
}

export default App;
