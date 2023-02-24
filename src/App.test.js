import { render, screen } from "@testing-library/react";
import App from "./App";

test("CreateButton", () => {
  render(<App />);
  const createButton = screen.getByRole(/button/i);
  expect(createButton).toBeInTheDocument();
  const createButtoninnerHTML = createButton.innerHTML;
  expect(createButtoninnerHTML).toContain("Create");
});

test("inputfields", () => {
  render(<App />);
  const motto = screen.getByLabelText(/motto/i);
  expect(motto).toBeInTheDocument();
  const notes = screen.getByLabelText(/notes/i);
  expect(notes).toBeInTheDocument();
  const textboxes = screen.getAllByRole("textbox");
  textboxes.forEach((textbox) => {
    expect(textbox).toBeInTheDocument();
    expect(["Motto", "Notes"]).toContain(textbox.id);
  });
});
