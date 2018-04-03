import React, {Component} from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { fetch_boards } from "../actions/boardActions"

const mapStateToProps = (state) => {
  return { boards: state.board.boards }
}

class HomeContainer extends Component {
  render() {
    const boards = this.props.boards.map((board) => (
      <tr key={board.id}>
        <td><Link className="board_link" key={board.id} to={`/${board.permalink}`}>/{board.permalink}</Link></td>
        <td><p>{board.description}</p></td>
      </tr>
    ));

    return (
      <table className="boards_list_home" cellPadding="0" cellSpacing="0">
        <tbody>
          {boards}
        </tbody>
      </table>
    )
  }
}

export default connect(mapStateToProps)(HomeContainer)
