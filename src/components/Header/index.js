import "./Header.css";

export default function Header({ children }) {
  return (
    <header className="Header">
      <h1>{children}</h1>
    </header>
  );
}
