import React, { Component } from "react"
import { Link } from "react-router-dom"

class Post extends Component {
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
        <span className={(isReply ? " reply" : "post") + "_body"}>
          {post.body}
        </span>
        {
          (isReply && !perm) ? "" :
          <span className="post_footer">{post.replies.length} replies</span>
        }
      </div>
    )
  }
}


export default Post
