import React, { Component } from "react"
import { Link } from "react-router-dom"

class BoardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [
        { id: 1, name: "news", perm: "/news"},
        { id: 2, name: "funny", perm: "/funny"}
      ]
    }
  }

  render() {
    const boards = this.state.boards.map((board) => (
      <Link className="board_link" key={board.id} to={board.perm}>/{board.name}</Link>
    ));

    return (
      <div className="boards_list">
        {boards}
      </div>
    )
  }
}

export default BoardsList
