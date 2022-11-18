import { render, screen } from "@testing-library/react"
import Feature from "./Feature"

describe('Feature Component', () => {
  test('Feature Snapshot', () => {
    render(<Feature />)
    expect(screen).toMatchSnapshot()
  })
})