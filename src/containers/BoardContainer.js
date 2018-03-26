import React from "react"
import Board from "../components/Board"

const BoardContainer = ({ match }) => (
  <div className="board_wrapper">
    <h1 className="board_name">[{match.params.perm}]</h1>
    <Board perm={match.params.perm}/>
  </div>
)

export default BoardContainer
