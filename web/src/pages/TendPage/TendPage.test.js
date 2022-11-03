import { render } from '@redwoodjs/testing/web'

import TendPage from './TendPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TendPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TendPage />)
    }).not.toThrow()
  })
})
