import { createReducer, createAction, PayloadAction } from 'redux-starter-kit'
import { Payload } from '../components/form'

export interface ColorDictionaryState {
  [key: string]: string
}

export type Color = string

export type RemoveColorAction = (color: string) => void
export type EditColorAction = (color: string) => void

export const addColor = createAction('color/add')
export const updateColor = createAction('color/update')
export const removeColor = createAction('color/remove')

export const colorDictionaryReducer = createReducer(
  {
    Anthrazite: 'Dark Grey',
  },
  {
    // @ts-ignore
    [addColor.type]: (state, action) => ({
      ...state,
      [action.payload.from]: action.payload.to,
    }),
    [updateColor.type]: (state, action) => ({
      ...state,
      [action.payload.from]: action.payload.to,
    }),
    [removeColor.type]: (state, action) => {
      const mutatedState = state
      // @ts-ignore
      delete mutatedState[action.payload]
      return mutatedState
    },
  }
)
