import "./NavigationItem.css";
export default function NavigationItem({ title, number, selected }) {
  return (
    <li className="listItem ">
      <p className={`text ${selected ? "text--bolded" : ""}`}>{title}</p>
      <p className={`number ${selected ? "number--bolded" : ""}`}>{number}</p>
    </li>
  );
}
