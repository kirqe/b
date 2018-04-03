import React, { Component } from "react"
import Post from "./Post"
import Waypoint from 'react-waypoint';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetch_board, fetch_more_boards } from "../actions/boardActions"

const mapStateToProps = (state) => {
  return {
    topics: state.board.topics,
    next_href: state.board.next_href
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetch_board, fetch_more_boards }, dispatch)
}

class Board extends Component {
  constructor(props) {
    super(props)
    this.fetch_more = this.fetch_more.bind(this)
  }

  componentWillMount() {
    this.props.fetch_board(this.props.perm)
  }

  componentWillReceiveProps(nextProps) { // or componentDidUpdate
    if (this.props.perm !== nextProps.perm) {
      this.props.fetch_board(nextProps.perm)
    }
  }

  fetch_more() {
    if (this.props.next_href) { this.props.fetch_more_boards(this.props.next_href) }
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
        {
          threads.length > 0 ?
          <Waypoint
            onEnter={()=>{this.fetch_more()}}
          /> : ""
        }

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
