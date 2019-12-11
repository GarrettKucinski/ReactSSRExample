import createReducer from './helpers/createReducer'
import { FETCH_ADMINS } from '../actions'
import { mergeApiPayload } from './helpers/handlers'

const INITIAL_STATE = {}

const HANDLERS = {
  [FETCH_ADMINS]: mergeApiPayload
}

const adminsReducer = createReducer(INITIAL_STATE, HANDLERS)

export default adminsReducer
