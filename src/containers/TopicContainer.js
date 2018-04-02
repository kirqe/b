import React from "react"
import Topic from "../components/Topic"

const TopicContainer = ({ match, location }) => (
  <div className="topic_wrapper">
    <h1 className="board_name">/{match.params.perm}</h1>
    <h1>{match.params.perm} {location.pathname}</h1>
    <Topic params={match.params}/>
  </div>
)

export default TopicContainer
