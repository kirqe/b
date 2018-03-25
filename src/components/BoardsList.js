import React, { Component } from "react"

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
      <a className="board_link" key={board.id} href={board.perm}>/{board.name}</a>
    ));

    return (
      <div>
        <h1>Boards</h1>
        {boards}
      </div>
    )
  }
}

export default BoardsList
