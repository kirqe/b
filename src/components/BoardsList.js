import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetch_boards } from "../actions/boardActions"

const mapStateToProps = (state) => {
  return { boards: state.board.boards }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetch_boards }, dispatch);
}

class BoardsList extends Component {
  componentWillMount() {
    this.props.fetch_boards()
  }

  render() {
    const boards = this.props.boards.map((board) => (
      <Link className="board_link" key={board.id} to={`/${board.permalink}`}>/{board.permalink}</Link>
    ));

    return (
      <div className="boards_list">
        {boards}
      </div>
    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(BoardsList)
