import "./Input.css";
export default function Input({ children, title }) {
  return (
    <>
      <label htmlFor={title} className="label">
        {title}
      </label>
      <br />

      {title === "Notes" ? (
        <textarea id={title} className="input">
          {children}
        </textarea>
      ) : (
        <input id={title} className="input">
          {children}
        </input>
      )}

      <br />
    </>
  );
}
