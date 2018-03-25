import React, { Component } from 'react';

import './App.css';
// containers
import BoardContainer from "./containers/BoardContainer"
import HomeContainer from "./containers/HomeContainer"

// components
import BoardsList from "./components/BoardsList"
import Header from "./components/Header"

import { BrowserHistory as Router, Route, BrowserRouter, Link } from "react-router-dom"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <BoardsList />
          
          <Route path="/:perm" component={BoardContainer} />
          <Route path="/" component={HomeContainer} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
