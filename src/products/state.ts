import { createReducer } from 'redux-starter-kit'
import { ProductState } from './types'

let initialState: ProductState = {
  products: [],
}

export default createReducer(initialState, {})
