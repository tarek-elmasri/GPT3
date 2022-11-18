import { render, screen } from "@testing-library/react"
import Navbar from "./Navbar"

describe('Navbar Component', () => {

  test('Navbar snapshot', () => {
    render(<Navbar />)
    expect(screen).toMatchSnapshot()
  })
})