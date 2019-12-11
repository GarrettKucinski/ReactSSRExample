import React, { useEffect } from 'react'
import { identity } from 'ramda'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAdmins } from '../actions'
import RequireAuth from '../components/hoc/RequireAuth'

const renderAdmins = admins => [...admins].map(({ id, name }) => (
  <li key={id}>{name}</li>
))

const AdminsListPage = () => {
  const { admins } = useSelector(identity)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAdmins())
  }, [])

  return (
    <section>
      <h3>Protected list of Admins</h3>
      {renderAdmins(admins)}
    </section>
  )
}

export default {
  component: RequireAuth(AdminsListPage),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
}
