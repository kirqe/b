import React, { Component } from "react"
import Post from "./Post"
import Form from "./Form"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return {thread: state.thread.thread}
}


class ThreadsList extends Component {

  render() {
    const replies = this.props.thread.replies

    return(
      <div>
        <div className="reply_form_wrapper">
          <Form />
        </div>
        <div key={this.props.thread.id}>
          <div className="post">
            <Post isReply={false} post={this.props.thread} perm={this.props.perm} />
            <span className="reply_wrap">
              {this.props.thread.replies.map((reply) => {
                return (<Post isReply={true} post={reply} key={reply.id} />)
              }, this)}
            </span>
          </div>
          <hr/>
        </div>

      </div>
    )
  }
}

const Thread = connect(mapStateToProps)(ThreadsList)

export default Thread
