import "./Button.css";
export default function Button({ children, onClick }) {
  return (
    <button className="Button" onClick={() => onClick()}>
      <strong>{children}</strong>
    </button>
  );
}
