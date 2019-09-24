import { createSlice, PayloadAction } from 'redux-starter-kit'
import {
  ColorDictionaryState,
  AddColorPayload,
  UpdateColorPayload,
  RemoveColorPayload,
} from './types'

let initialState: ColorDictionaryState = {
  dictionary: {
    Anthrazite: 'Dark Grey',
  },
}

const colorDictionarySlice = createSlice({
  slice: 'colorDictionary',
  initialState,
  reducers: {
    addColor(state, action: PayloadAction<AddColorPayload>) {
      const { from, to } = action.payload
      state.dictionary[from] = to // :heart: Immer.js :)
    },
    updateColor(state, action: PayloadAction<UpdateColorPayload>) {
      const { from, to } = action.payload
      state.dictionary[from] = to // :heart: Immer.js :)
    },
    removeColor(state, action: PayloadAction<RemoveColorPayload>) {
      delete state.dictionary[action.payload.color] // also, thanks to Immer.js :)
    },
  },
})

export const { addColor, updateColor, removeColor } = colorDictionarySlice.actions

export default colorDictionarySlice.reducer
