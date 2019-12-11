import { identity, propOr } from 'ramda'

export default (initialState = {}, handlers = {}) => {
  return (state = initialState, action) => {
    const actionHandler = propOr(identity, action.type, handlers)
    return actionHandler(state, action.payload)
  }
}
