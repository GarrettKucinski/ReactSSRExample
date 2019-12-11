import { mergeRight } from 'ramda'
import createReducer from './helpers/createReducer'
import { FETCH_USERS } from '../actions'

const INITIAL_STATE = {}
const HANDLERS = {
  [FETCH_USERS]: mergeRight
}

const userReducer = createReducer(INITIAL_STATE, HANDLERS)

export default userReducer
