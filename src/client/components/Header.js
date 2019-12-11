import React from 'react'
import { identity } from 'ramda'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default () => {
  const { auth } = useSelector(identity)
  const authButton = auth
    ? <a href='/api/logout'>Logout</a>
    : <a href='/api/auth/google'>Login</a>

  return (
    <nav>
      <section className='nav-wrapper'>
        <h1>
          <Link className='brand-logo' to='/'>Reactin&apos;</Link>
        </h1>
        <ul className='right'>
          <li><Link to='/users'>Users</Link> </li>
          <li><Link to='/admins'>Admins</Link> </li>
          <li>{authButton} </li>
        </ul>
      </section>
    </nav>
  )
}
