import React, { Component } from "react"
import { Link } from "react-router-dom"

class Post extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {post, isReply, perm} = this.props

    return (
      <div className={"post" + (isReply ? " reply" : "")} >
        <span className="post_details ">
          <span className="by">by anonymous</span>
          <span className="date">{post.date}</span>
          {
            isReply ? "" :
            <span className="repl">[<Link className="thread_link" to={`${perm}/${post.id}`} >answer</Link>]</span>
          }
        </span>
        <span className="reply_body">
          {post.body}
        </span>
      </div>
    )
  }
}


export default Post
