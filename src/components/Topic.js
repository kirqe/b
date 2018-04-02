import React, { Component } from "react"
import Post from "./Post"
import Form from "./Form"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetch_topic } from "../actions/topicActions"

const mapStateToProps = (state) => {
  return { topic: state.topic.topic }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetch_topic }, dispatch)
}

class topicsList extends Component {
  componentDidMount() {
    this.props.fetch_topic(this.props.params)
  }

  render() {
    const replies = this.props.topic.posts
    return(
      <div>
        <div key={this.props.topic.id}>
          <div className="post">
            <Post isReply={false} post={this.props.topic} perm={this.props.perm} />
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

const topic = connect(mapStateToProps, mapDispatchToProps)(topicsList)

export default topic
