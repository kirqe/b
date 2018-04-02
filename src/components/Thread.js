import React, { Component } from "react"
import Post from "./Post"
import Form from "./Form"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetch_thread } from "../actions/threadActions"

const mapStateToProps = (state) => {
  return { thread: state.thread.thread }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetch_thread }, dispatch)
}


class ThreadsList extends Component {
  componentDidMount() {
    this.props.fetch_thread(this.props.params)
  }

  render() {
    const replies = this.props.thread.posts
    return(
      <div>

        <div key={this.props.thread.id}>
          <div className="post">
            <Post isReply={false} post={this.props.thread} perm={this.props.perm} />
            <span className="reply_wrap">
              {
                (replies) ?
                replies.map((post) => {
                  return (<Post isReply={true} post={post} key={post.id} />)
                }, this) :
                ""
              }
            </span>
          </div>
          <hr/>
        </div>

      </div>
    )
  }
}

const Thread = connect(mapStateToProps, mapDispatchToProps)(ThreadsList)

export default Thread
