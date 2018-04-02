import React, { Component } from 'react';

import './App.css';
// containers
import BoardContainer from "./containers/BoardContainer"
import TopicContainer from "./containers/TopicContainer"
import HomeContainer from "./containers/HomeContainer"

// components
import Header from "./components/Header"
import { Route, BrowserRouter } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Route exact path="/:perm/:id" component={TopicContainer} />
          <Route exact path="/:perm" component={BoardContainer} />
          <Route exact path="/" component={HomeContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
