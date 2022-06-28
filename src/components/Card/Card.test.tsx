import React from 'react'
import { render } from '@testing-library/react'

import Card from './Card'

describe('Card1', () => {
  test('renders the Card1 component', () => {
    render(<Card style={{ backgroundColor: 'blue' }}> My Card </Card>)
  })
})

describe('Card12', () => {
  test('renders the Card1 component', () => {
    render(
      <Card minWidth={'100px'}>
        <button>CLick</button>my card2
      </Card>
    )
  })
})
