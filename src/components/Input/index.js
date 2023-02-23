export default function Input({ children, title }) {
  return (
    <>
      <label htmlFor={title}>
        {title}
        <input id={title}>{children}</input>
      </label>
    </>
  );
}
