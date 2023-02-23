import star from "../../resources/star.svg";

export default function Entry({ children, title }) {
  return (
    <article>
      <h3>{title}</h3>
      <img src={star} alt="star" />
      {children}
    </article>
  );
}
