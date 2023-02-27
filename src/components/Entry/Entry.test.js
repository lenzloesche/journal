import Entry from ".";
import { render, screen, fireEvent } from "@testing-library/react";

test("should run the prop-function when the star is pressed", () => {
  let test = false;
  render(
    <Entry
      onStarClick={() => {
        test = true;
      }}
    />
  );
  const starButton = screen.getByRole("img");
  fireEvent.click(starButton);
  expect(test).toBe(true);
});

test("if bookmarked it should show the filled star", () => {
  render(<Entry bookmarked={true} />);
  const star = screen.getByRole("img");
  const starFilled = star.src.includes("star-filled.svg");
  expect(starFilled).toBe(true);
});

test("if not bookmarked it should show the star", () => {
  render(<Entry bookmarked={false} />);
  const star = screen.getByRole("img");
  const starFilled = star.src.includes("star-filled.svg");
  expect(starFilled).toBe(false);
});

test("new entries should display the year", () => {
  render(<Entry date={2050} />);
  const dateParagraph = screen.getByTestId("date");
  const yearText = dateParagraph.innerHTML.includes(2050);
  expect(yearText).toBe(true);
});

test("should display the title and text they are given", () => {
  render(<Entry title="Test title">Lorem ipsum</Entry>);
  const title = screen.getByRole("heading");
  const test = title.innerHTML.includes("Test title");
  expect(test).toBe(true);

  const text = screen.getByTestId("entyText");
  const test2 = text.innerHTML.includes("Lorem ipsum");
  expect(test2).toBe(true);
});
