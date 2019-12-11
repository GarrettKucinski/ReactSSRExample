import React from 'react'
import { identity } from 'ramda'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default ChildComponent => {
  return props => {
    const { auth } = useSelector(identity)

    if (auth === null) {
      return <div>Loading ...</div>
    }

    return auth ? <ChildComponent {...props} /> : <Redirect to='/' />
  }
}
