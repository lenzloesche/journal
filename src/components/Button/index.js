import "./Button.css";
export default function Button({ children, onClick, buttonOutput }) {
  return (
    <>
      <p
        className={`Button-output ${
          buttonOutput.isAlert ? "Button-output--alert" : ""
        }`}
      >
        {buttonOutput.text}
      </p>
      <button className="Button" onClick={() => onClick()}>
        <strong>{children}</strong>
      </button>
    </>
  );
}
