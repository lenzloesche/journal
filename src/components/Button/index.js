import "./Button.css";
export default function Button({ children, onClick, buttonOutput, small }) {
  return (
    <>
      <p
        className={`Button-output ${
          buttonOutput?.isAlert ? "Button-output--alert" : ""
        }`}
      >
        {buttonOutput?.text}
      </p>
      <button
        className={small ? "Button Button-small" : "Button"}
        onClick={() => onClick()}
      >
        <strong>{children}</strong>
      </button>
    </>
  );
}
