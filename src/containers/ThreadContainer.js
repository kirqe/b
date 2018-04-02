import React from "react"
import Thread from "../components/Thread"

const ThreadContainer = ({ match, location }) => (
  <div className="thread_wrapper">
    <h1>{match.params.perm} {location.pathname}</h1>
    <Thread params={match.params}/>
  </div>
)

export default ThreadContainer
