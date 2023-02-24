import star from "../../resources/star.svg";
import starFilled from "../../resources/star-filled.svg";
import "./Entry.css";

export default function Entry({
  children,
  title,
  date,
  bookmarked,
  onStarClick,
}) {
  return (
    <article>
      <p className="date">{date}</p>
      <div className="flexbox">
        <h3 className="motto">{title}</h3>
        <img
          src={bookmarked ? starFilled : star}
          alt="star"
          onClick={(number) => {
            onStarClick(number);
          }}
        />
      </div>
      <p className="notes">{children}</p>
      <div className="line"></div>
    </article>
  );
}
