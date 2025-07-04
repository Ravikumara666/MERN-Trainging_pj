import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>This is Home Page</h1>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Outlet/>
    </div>
  )
}
