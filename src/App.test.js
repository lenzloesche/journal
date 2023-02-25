import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "./App";

test("CreateButton exists", () => {
  render(<App />);
  const buttons = screen.getAllByRole(/button/i);
  const createButton = buttons.filter((button) =>
    button.textContent.includes("Create")
  );
  expect(createButton[0]).toBeInTheDocument();
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

/* test("just a test", () => {
  render(<App />);

  const entries = screen.getAllByRole("article");
  const entriesFiltered = entries.filter((entry) =>
    entry.textContent.includes("Lorem1")
  );
  console.log(entriesFiltered);
});
 */
