import React from "react"
import { Link } from "react-router-dom"
import BoardsList from "./BoardsList"

const Header = () => (
  <div className="header">
    <BoardsList />
    <div  className="right">
      <Link className="" to="/">Home</Link>
    </div>
  </div>
)

export default Header
