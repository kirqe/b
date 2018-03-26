import React, { Component } from 'react';

import './App.css';
// containers
import BoardContainer from "./containers/BoardContainer"
import ThreadContainer from "./containers/ThreadContainer"
import HomeContainer from "./containers/HomeContainer"

// components
import BoardsList from "./components/BoardsList"
import Header from "./components/Header"


import { Route, BrowserRouter } from "react-router-dom"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <BoardsList />


          <Route exact path="/:perm/:id" component={ThreadContainer} />
          <Route exact path="/:perm" component={BoardContainer} />
          <Route exact path="/" component={HomeContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
