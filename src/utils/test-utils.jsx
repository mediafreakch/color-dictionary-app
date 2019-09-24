import React from 'react'
import { configureStore } from 'redux-starter-kit'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import { rootReducer } from '../store'

/**
 * See https://testing-library.com/docs/react-testing-library/setup#custom-render
 *
 * return the same things as the render function of react-testing-library
 * but wrap the component with all the required Providers of the app.
 * You can pass a custom `initialState` in the second arg object or even a full redux store.
 */
const renderWithProviders = (
  ui,
  {
    initialState,
    store = configureStore({ reducer: rootReducer, preloadedState: initialState }),
  } = {}
) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  // adding `store` to the returned utilities to allow us
  // to reference it in our tests (just try to avoid using
  // this to test implementation details).
  store,
})

export * from '@testing-library/react'
export { renderWithProviders as render }
