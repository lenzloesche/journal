import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import React from "react";

test("CreateButton exists", () => {
  render(<App />);
  const createButton = getCreateButton(screen);
  expect(createButton).toBeInTheDocument();
});

test("button click should create a new entry (if text in both input fields) with the given text", () => {
  render(<App />);
  const createButton = getCreateButton(screen);
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
  const createButton = getCreateButton(screen);
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

test("inputfields exist", () => {
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

function getCreateButton(screen) {
  const buttons = screen.getAllByRole(/button/i);
  const createButtonArray = buttons.filter((button) =>
    button.textContent.includes("Create")
  );
  return createButtonArray[0];
}

function getFavoritesButton(screen) {
  const listItems = screen.getAllByRole(/listitem/i);
  const listItemsArray = listItems.filter((listItem) =>
    listItem.textContent.includes("Favorites")
  );
  return listItemsArray[0];
}

test("if you create a new entry, you can favorite and display it.", () => {
  render(<App />);
  const createButton = getCreateButton(screen);

  const textboxes = screen.getAllByRole("textbox");
  textboxes.forEach((textbox) => {
    fireEvent.change(textbox, {
      target: { value: "testtext" },
    });
  });
  fireEvent.click(createButton);
  const testInputText = screen.getAllByText(/testtext/i);
  const theRightStar = testInputText[0].parentElement.querySelector("img");
  expect(theRightStar.src).toContain("star.svg");
  fireEvent.click(theRightStar);
  expect(theRightStar.src).toContain("star-filled.svg");
  const favButton = getFavoritesButton(screen);
  fireEvent.click(favButton);
  const testInputTextonFavoritePage = screen.getAllByText(/testtext/i);
  expect(testInputTextonFavoritePage[0]).toBeInTheDocument();
});

test("new entries should display the current year", () => {
  render(<App />);
  const createButton = getCreateButton(screen);

  const textboxes = screen.getAllByRole("textbox");
  textboxes.forEach((textbox) => {
    fireEvent.change(textbox, {
      target: { value: "testtext" },
    });
  });
  fireEvent.click(createButton);

  const currenDate = new Date();
  const currentYear = currenDate.getFullYear();
  const dateParagraphs = screen.getAllByTestId("date");
  const yearText = dateParagraphs.filter((paragraph) => {
    return paragraph.innerHTML.includes(currentYear);
  });
  expect(yearText[0]).toBeInTheDocument();
});

test("create button should have css-class Button", async () => {
  render(<App />);
  const createButton = getCreateButton(screen);
  expect(createButton).toHaveClass("Button");
});

test("should have one header element that says journal", () => {
  render(<App />);
  const header = screen.getAllByRole("banner");
  expect(header[0]).toBeInTheDocument();
  expect(header.length).toBe(1);
  const test = header[0].innerHTML.includes("JOURNAL");
  expect(test).toBe(true);
});

test("should have one footer element that says journal app", () => {
  render(<App />);
  const footer = screen.getAllByRole("contentinfo");
  expect(footer[0]).toBeInTheDocument();
  expect(footer.length).toBe(1);
  const test = footer[0].innerHTML.includes("Journal App");
  expect(test).toBe(true);
});
