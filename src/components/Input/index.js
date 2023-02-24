import "./Input.css";
export default function Input({ children, title }) {
  return (
    <>
      <div className="lable-container">
        <label htmlFor={title} className="label">
          {title}
        </label>
      </div>
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
