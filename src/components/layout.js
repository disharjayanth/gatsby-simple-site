import React from 'react'
import { Link } from 'gatsby'

const ListLink = (props) => (
  <li className="inline-block mr-4">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div className="my-10 mx-10 sm:my-12 sm:mx-auto w-3/4 sm:w-1/2 px-4">
      <header className="mb-10">
        <Link to="/">
          <h3 className="inline">Myself</h3>
        </Link>
        <ul className="list-none float-right">
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about">About</ListLink>
          <ListLink to="/contact">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
