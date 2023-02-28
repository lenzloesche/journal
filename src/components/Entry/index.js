import star from "../../resources/star.svg";
import starFilled from "../../resources/star-filled.svg";
import "./Entry.css";

export default function Entry({
  children,
  title,
  date,
  bookmarked,
  onStarClick,
  noDivider,
  handleDelete,
}) {
  return (
    <article>
      <p data-testid="date" className="date">
        {date}
      </p>
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
      <p data-testid="entyText" className="notes">
        {children}
      </p>
      <button onClick={(id) => handleDelete(id)}>Delete</button>
      {!noDivider ? <div className="line"></div> : ""}
    </article>
  );
}
