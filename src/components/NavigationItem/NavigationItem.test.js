import NavigationItem from ".";
import { render, screen, fireEvent } from "@testing-library/react";

test("should run the prop-function when the star is pressed", () => {
  let test = false;
  render(
    <NavigationItem
      onClick={() => {
        test = true;
      }}
    />
  );
  const button = screen.getByTestId("navigationListItem");
  fireEvent.click(button);
  expect(test).toBe(true);
});

test("if the NavigationItem is selected, there should be a difference in classes to when it is not selected", () => {
  const { rerender } = render(<NavigationItem selected={false} />);
  const title = screen.getByTestId("navigationtitle");
  const classList = JSON.stringify(title.classList);
  rerender(<NavigationItem selected={true} />);
  const newClassList = JSON.stringify(title.classList);
  expect(classList).not.toBe(newClassList);
});

test("should display the number it is given", () => {
  render(<NavigationItem number={12345678} />);
  const numberIsIncluded = screen.getByText("12345678");
  expect(numberIsIncluded).toBeInTheDocument();
});
