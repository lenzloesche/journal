import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("CreateButton", () => {
  render(<App />);
  const createButton = screen.getByRole(/button/i);
  expect(createButton).toBeInTheDocument();
  const createButtoninnerHTML = createButton.innerHTML;
  expect(createButtoninnerHTML).toContain("Create");
});

test("button click should create a new entry (if text in both input fields) with the given text", () => {
  render(<App />);
  const createButton = screen.getByRole(/button/i);
  const entriesOld = screen.getAllByRole("article");
  const textboxes = screen.getAllByRole("textbox");
  textboxes.forEach((textbox, index) => {
    fireEvent.change(textbox, {
      target: { value: "TestInputedtthrt" + index },
    });
  });
  fireEvent.click(createButton);
  const entriesNew = screen.getAllByRole("article");
  expect(entriesNew.length).toBe(entriesOld.length + 1);
  const testInputText = screen.getByText(/TestInputedtthrt0/i);
  expect(testInputText).toBeInTheDocument();
});

test("button click should not create a new entry if one of input fields is empty", () => {
  render(<App />);
  const createButton = screen.getByRole(/button/i);
  const entriesOld = screen.getAllByRole("article");
  const textboxes = screen.getAllByRole("textbox");
  textboxes.forEach((textbox, index) => {
    let testText = "";
    if (index === 0) {
      testText = "wivbwiuezvbweuizbvweuihef";
    }
    fireEvent.change(textbox, {
      target: { value: testText },
    });
  });
  fireEvent.click(createButton);
  const entriesNew = screen.getAllByRole("article");
  expect(entriesNew.length).toBe(entriesOld.length);
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
  expect(textboxes.length).toBe(2);
});
