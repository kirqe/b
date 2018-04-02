import React, { Component } from "react"
import { Link } from "react-router-dom"
import Post from "./Post"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetch_board } from "../actions/boardActions"

const mapStateToProps = (state) => {
  return {
    topics: state.board.topics
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetch_board }, dispatch)
}

class BoardThreads extends Component {
  componentWillMount() {
    this.props.fetch_board(this.props.perm)
  }

  componentWillReceiveProps(nextProps) { // or componentDidUpdate
    if (this.props.perm !== nextProps.perm) {
      this.props.fetch_board(nextProps.perm)
    }
  }

  render() {
    const threads = this.props.topics.map((topic) => (
      <div key={topic.id}>
        <div className="post">
          <Post isReply={false} post={topic} perm={this.props.perm} />
          <span className="reply_wrap">
            {topic.posts.slice(0, 3).map((reply) => {
              return (<Post isReply={true} post={reply} key={reply.id} />)
            }, this)}
          </span>
        </div>
        <hr/>
      </div>
    ));


    return (
      <div>
        {threads}
      </div>
    )
  }
}

const Board = connect(mapStateToProps, mapDispatchToProps)(BoardThreads)

export default Board
