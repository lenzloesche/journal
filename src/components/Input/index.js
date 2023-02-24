import "./Input.css";
import { useState, useEffect } from "react";
export default function Input({
  title,
  input,
  eraseInput,
  putEraseInputFalse,
}) {
  const [elements, setElements] = useState([
    document.createElement("div"),
    document.createElement("div"),
  ]);
  useEffect(() => {
    if (eraseInput) {
      putEraseInputFalse();
    }
  });
  if (eraseInput && (elements[0].value !== "" || elements[1].value !== "")) {
    let newElements = [...elements];
    newElements[0].value = "";
    newElements[1].value = "";
    setElements(newElements);
  }

  return (
    <>
      <div className="lable-container">
        <label htmlFor={title} className="label">
          {title}
        </label>
      </div>
      <br />

      {title === "Notes" ? (
        <textarea
          id={title}
          className="input"
          onChange={(event) => {
            input.notes = event.target.value;
            elements[0] = event.target;
          }}
        ></textarea>
      ) : (
        <input
          id={title}
          className="input"
          onChange={(event) => {
            input.title = event.target.value;
            elements[1] = event.target;
          }}
        ></input>
      )}

      <br />
    </>
  );
}
