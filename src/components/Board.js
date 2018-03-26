import React, { Component } from "react"
import { Link } from "react-router-dom"
import Post from "./Post"

import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return {threads: state.board.threads}
}


class BoardThreads extends Component {

  render() {
    const threads = this.props.threads.map((thread) => (
      <div key={thread.id}>
        <div className="post">
          <Post isReply={false} post={thread} perm={this.props.perm} />
          <span className="reply_wrap">
            {thread.replies.slice(0, 3).map((reply) => {
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

const Board = connect(mapStateToProps)(BoardThreads)

export default Board
