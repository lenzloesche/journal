export default function NavigationItem({ title, number, selected }) {
  return (
    <li>
      {title}
      <div>{number}</div>
    </li>
  );
}
