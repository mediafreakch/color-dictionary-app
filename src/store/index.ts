import { configureStore, combineReducers } from 'redux-starter-kit'

import colorDictionaryReducer from '../color-dictionary/state'
import productsReducer from '../products/state'

const rootReducer = combineReducers({
  colorDictionary: colorDictionaryReducer,
  products: productsReducer,
})

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    colorDictionary: {
      dictionary: {
        Anthrazite: 'Black',
      },
    },
    products: {
      products: [
        {
          name: 'Apple iPhone 6s',
          color: 'Anthrazite',
          price: 769,
        },
        { name: 'Samsung Galaxy S8', color: 'Midnight Black', price: 569 },
        { name: 'Huawei P9', color: 'Mystic Silver', price: 272 },
        { name: 'Nokia 8', color: 'Light Silvergrey', price: 420 },
      ],
    },
  },
})

export type RootState = ReturnType<typeof rootReducer>
export { rootReducer }
export default store
