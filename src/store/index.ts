import { configureStore } from 'redux-starter-kit'

import { colorDictionaryReducer as colorDictionary, ColorDictionaryState } from '../color-dictionary/state'
import { productsReducer as products, ProductState } from '../products/state'

export interface AppState {
  colorDictionary: ColorDictionaryState,
  products: ProductState,
}

const store = configureStore({
  reducer: {
    colorDictionary,
    products
  }
})

export default store