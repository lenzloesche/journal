import star from "../../resources/star.svg";
import starFilled from "../../resources/star-filled.svg";
import "./Entry.css";
import Button from "../Button";

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
      <Button onClick={(id) => handleDelete(id)} small={true}>
        Delete
      </Button>
      {!noDivider ? <div className="line"></div> : ""}
    </article>
  );
}
