import { configureStore, combineReducers } from 'redux-starter-kit'

import colorDictionaryReducer from '../color-dictionary/state'
import productsReducer from '../products/state'

const rootReducer = combineReducers({
  colorDictionary: colorDictionaryReducer,
  products: productsReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default store
