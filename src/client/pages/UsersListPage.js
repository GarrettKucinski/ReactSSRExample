import React, { useEffect } from 'react'
import { identity } from 'ramda'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'

const renderUsers = users => {
  return Object.values(users).map(
    user => <li key={user.id}>{user.name}</li>
  )
}

const renderHead = users => {
  const numUsers = Object.values(users).length
  return (
    <Helmet>
      <title>{`${numUsers} Users App`}</title>
      <meta property='og:title' content='Users App' />
    </Helmet>
  )
}
const UsersListPage = () => {
  const dispatch = useDispatch()
  const { users } = useSelector(identity)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      {renderHead(users)}
      Here&apos;s a big list of users:
      <ul>{renderUsers(users)}</ul>
    </div>
  )
}

export default {
  component: UsersListPage,
  loadData: ({ dispatch }) => dispatch(fetchUsers())
}
