import React from 'react'
import DictionaryManager from './'
import { render } from '../utils/test-utils'

it('renders the form', () => {
  const { getByLabelText, unmount } = render(<DictionaryManager />)
  getByLabelText('From')
  getByLabelText('To')

  unmount()
})

it('does not render a list when no entries in dictionary', () => {
  const { queryByText, unmount } = render(<DictionaryManager />)
  const subtitle = queryByText('Or edit an existing:')
  expect(subtitle).toBeNull()

  unmount()
})

it('does render a list when entries in dictionary', () => {
  const { getByText, unmount } = render(<DictionaryManager />, {
    initialState: { colorDictionary: { dictionary: { Anthrazite: 'Black' } } },
  })
  getByText('Or edit an existing:')

  unmount()
})
