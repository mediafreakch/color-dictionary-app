import React from 'react'
import Form from './form'
import { render, fireEvent } from '../utils/test-utils'

it('disables the submit button at first', () => {
  const { getByRole, unmount } = render(<Form />)
  const button = getByRole('button')

  expect(button).toHaveAttribute('disabled')

  unmount()
})

it('enabled the submit button once values are entered', () => {
  const { getByRole, getByLabelText, unmount } = render(<Form />)

  const fromInput = getByLabelText('From')
  const toInput = getByLabelText('To')

  fireEvent.change(fromInput, { target: { value: 'Anthrazite', id: 'from' } })
  fireEvent.change(toInput, { target: { value: 'Black', id: 'to' } })

  const button = getByRole('button')

  expect(button).not.toHaveAttribute('disabled')
})

it('shows an error if input is dirty and empty', () => {
  const { getByText, getByLabelText, unmount } = render(<Form />)
  const fromInput = getByLabelText('From')

  fireEvent.change(fromInput, { target: { value: ' ', id: 'from' } })

  getByText('This field is required')
})

it('prevents adding a color that already exists in the dictionary', () => {
  const { getByText, getByLabelText, unmount } = render(<Form />, {
    initialState: { colorDictionary: { dictionary: { Black: 'Green' } } },
  })
  const fromInput = getByLabelText('From')

  fireEvent.change(fromInput, { target: { value: 'Black', id: 'from' } })

  getByText('Already exists. Edit the existing instead')
})
