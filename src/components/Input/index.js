import "./Input.css";
export default function Input({ title, input }) {
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
          onChange={(event) => (input.notes = event.target.value)}
        ></textarea>
      ) : (
        <input
          id={title}
          className="input"
          onChange={(event) => (input.title = event.target.value)}
        ></input>
      )}

      <br />
    </>
  );
}
