import "./Button.css";
export default function Button({ children }) {
  return (
    <button className="Button">
      <strong>{children}</strong>
    </button>
  );
}
