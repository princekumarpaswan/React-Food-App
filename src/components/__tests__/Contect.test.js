import { render, screen } from "@testing-library/react"
import Contact from "../Contact"

test("Should load contact us component", () => {

    render(<Contact />)

    const heading = screen.getAllByRole("heading");

    expect(heading).toBeInTheDocument();

})