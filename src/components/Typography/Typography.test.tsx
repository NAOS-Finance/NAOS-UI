import React from 'react'
import {render} from '@testing-library/react'

import Typography from './Typography'


describe('Typography', () => {
    test('renders the Typography component', () => {
      render(
        <Typography>
          Hello world!
        </Typography>
      )
    })
  })