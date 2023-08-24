import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/" >All</Link>
        <Link to="/?todos=active" >Active</Link>
        <Link to="/?todos=complete" >Complete</Link>
    </div>
  )
}

export default Navbar