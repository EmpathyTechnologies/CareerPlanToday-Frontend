import { render, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  test("renders button text correctly", () => {
    const buttonText = "Click me";
    const { getByText } = render(<Button text={buttonText} color='btn-blue' />);
    const button = getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  test("calls onClick function when button is clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button text='Click me' onClick={handleClick} color='btn-blue' />);
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies the correct button color class", () => {
    const { container } = render(<Button text='Click me' color='btn-green' />);
    const button = container.querySelector("button");
    expect(button).toHaveClass("btn-green");
  });

  test("applies the correct button type", () => {
    const { container } = render(<Button text='Submit' color='btn-blue' type='submit' />);
    const button = container.querySelector("button");
    expect(button).toHaveAttribute("type", "submit");
  });
});
