import "./Input.css";
export default function Input({ title, input, updateInput }) {
  return (
    <>
      <div className="lable-container">
        <label htmlFor={title} className="label" data-testid="label">
          {title}
        </label>
      </div>
      <br />

      {title === "Notes" ? (
        <textarea
          value={input.notes}
          id={title}
          className="input"
          onChange={(event) => {
            input.notes = event.target.value;
            updateInput();
          }}
        ></textarea>
      ) : (
        <input
          value={input.title}
          id={title}
          className="input"
          onChange={(event) => {
            input.title = event.target.value;
            updateInput();
          }}
        ></input>
      )}

      <br />
    </>
  );
}
