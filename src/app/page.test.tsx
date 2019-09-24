import React from 'react';
import App from './page';
import { render } from '../utils/test-utils'

it('renders without crashing', () => {
  const { getByText } = render(<App />)
  getByText('Color Dictionary')
})