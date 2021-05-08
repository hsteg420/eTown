import { Badge } from "@material-ui/core";
import Trailer from "../Trailer";

const DisplayTrend = ({
  id,
  poster,
  title,
  overview,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <>
      <div className="media">
        <Badge
          badgeContent={vote_average}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <div className="media-front">
          <img
            className="poster"
            src={"https://image.tmdb.org/t/p/w500/" + poster}
            alt={title}
          />
          <b className="title">{title}</b>
          <span className="subTitle">
            {media_type === "tv" ? "TV Series" : "Movie"}
            <span className="subTitle">{date}</span>
          </span>
        </div>
        <div className="media-back">
          <h3>Overview:</h3>
          <p>{overview}</p>
          <Trailer media_type={media_type} id={id}>
          </Trailer>
        </div>
      </div>
    </>
  );
};
export default DisplayTrend;
