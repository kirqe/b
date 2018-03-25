import React, { Component } from 'react';

import './App.css';
import BoardsList from "./components/BoardsList"


class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardsList />
      </div>
    );
  }
}

export default App;
