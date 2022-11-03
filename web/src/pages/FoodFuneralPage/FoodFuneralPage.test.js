import { render } from '@redwoodjs/testing/web'

import FoodFuneralPage from './FoodFuneralPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FoodFuneralPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FoodFuneralPage />)
    }).not.toThrow()
  })
})
