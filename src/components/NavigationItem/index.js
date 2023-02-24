import "./NavigationItem.css";
export default function NavigationItem({ title, number, selected, onClick }) {
  return (
    <li className="listItem " onClick={onClick}>
      <p className={`text ${selected ? "text--bolded" : ""}`}>{title}</p>
      <p className={`number ${selected ? "number--bolded" : ""}`}>{number}</p>
    </li>
  );
}
