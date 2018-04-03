import React, { Component } from 'react';

import './App.css';
// containers
import BoardContainer from "./containers/BoardContainer"
import TopicContainer from "./containers/TopicContainer"
import HomeContainer from "./containers/HomeContainer"

// components
import Header from "./components/Header"
import { Route, BrowserRouter } from "react-router-dom"


import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetch_boards } from "./actions/boardActions"

const mapStateToProps = (state) => {
  return {
    boards: state.board.boards
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetch_boards }, dispatch);
}

class App extends Component {
  componentDidMount() {
    this.props.fetch_boards()
  }
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


export default connect(mapStateToProps, mapDispatchToProps)(App);
