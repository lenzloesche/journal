import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";

test("button should have css-class Button", () => {
  render(<Button />);
  const createButton = screen.getByRole(/button/i);
  expect(createButton).toHaveClass("Button");
});

test("should have the innerText received via children", () => {
  render(<Button>Testbutton</Button>);
  const button = screen.getByRole(/button/i);
  const test = button.innerHTML.includes("Testbutton");
  expect(test).toBe(true);
});

test("should receive an onClick function that is triggered when pressed", () => {
  let test = false;
  render(
    <Button
      onClick={() => {
        test = true;
      }}
    />
  );
  const button = screen.getByRole(/button/i);
  fireEvent.click(button);
  expect(test).toBe(true);
});
