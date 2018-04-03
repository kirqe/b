import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return { boards: state.board.boards }
}

class BoardsList extends Component {
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

export default connect(mapStateToProps)(BoardsList)
