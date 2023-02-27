import Input from ".";
import { render, screen, fireEvent } from "@testing-library/react";
function updateInput() {}
test("should change the input variable it is getting, when user types", () => {
  let test = { notes: "" };
  render(<Input title="Notes" input={test} updateInput={updateInput} />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, {
    target: { value: "testtext" },
  });
  expect(test.notes).toBe("testtext");
});

test("should be an input or a textarea", () => {
  let helper = { notes: "" };
  render(<Input title="Motto" input={helper} updateInput={updateInput} />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});

test("should have a label with htmlfor attribute and Text title", () => {
  let helper = { notes: "" };
  render(<Input title="Notes" input={helper} supdateInput={updateInput} />);
  const input = screen.getByTestId("label");
  expect(input).toBeInTheDocument();
  const test1 = input.hasAttribute("for");
  expect(test1).toBe(true);
  const test = input.innerHTML.includes("Notes");
  expect(test).toBe(true);
});
