import { FETCH_CURRENT_USER } from '../actions'
import createReducer from './helpers/createReducer'
import { isAuthed } from './helpers/handlers'

const INITIAL_STATE = null
const HANDLERS = {
  [FETCH_CURRENT_USER]: isAuthed
}

const authReducer = createReducer(INITIAL_STATE, HANDLERS)

export default authReducer
