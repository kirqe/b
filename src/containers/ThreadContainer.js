import React from "react"

const ThreadContainer = ({ match, location }) => (
  <div>
    <h1>List of POSTS/COMMENTS will go here {match.params.perm} {location.pathname}</h1>
  </div>
)

export default ThreadContainer
