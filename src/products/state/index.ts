import { createReducer } from 'redux-starter-kit'

import { Product } from '../index'

export type ProductState = Array<Product>

export const productsReducer = createReducer(
  [
    {
      name: 'Apple iPhone 6s',
      color: 'Anthrazite',
      price: 769,
    },
    { name: 'Samsung Galaxy S8', color: 'Midnight Black', price: 569 },
    { name: 'Huawei P9', color: 'Mystic Silver', price: 272 },
    { name: 'Nokia 8', color: 'Light Silvergrey', price: 420 },
  ],
  {}
)
