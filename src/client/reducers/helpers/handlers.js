import { propOr } from 'ramda'

export const mergeApiPayload = (state, payload) => propOr([], ['data'], payload)
export const isAuthed = (state, payload) => propOr(false, ['data'], payload)
