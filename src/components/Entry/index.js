import star from "../../resources/star.svg";

export default function Entry({ children, title, date }) {
  return (
    <article>
      <p>{date}</p>
      <h3>{title}</h3>
      <img src={star} alt="star" />
      {children}
    </article>
  );
}
