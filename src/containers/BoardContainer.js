import React, { Component } from "react"
import Board from "../components/Board"
import Form from "../components/Form"

class BoardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      perm: props.match.params.perm,
      activeForm: false
    }
    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm(e) {
    e.preventDefault()
    this.setState({
      activeForm: !this.state.activeForm
    })

  }

  render() {
    const bt = this.state.activeForm ? "Close form" : "Reply to thread"
    return(
      <div className="board_wrapper">
        <h1 className="board_name">/{this.state.perm}</h1>
        <a className="toggle_form" onClick={this.toggleForm}>{bt}</a>
        { this.state.activeForm ? <Form /> : ""}
        <Board perm={this.state.perm}/>
      </div>
    )
  }
}

export default BoardContainer
