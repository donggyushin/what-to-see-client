import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import LinesEllipsis from "react-lines-ellipsis";

const cx = classNames.bind(styles);

const MovieListItem = ({
  id,
  title_long,
  year,
  rating,
  runtime,
  genres,
  summary,
  medium_cover_image,
  clickMovieListItem
}) => (
  <div className={cx("container")} onClick={() => clickMovieListItem(id)}>
    <img className={cx("poster")} src={medium_cover_image} alt="poster" />
    <div className={cx("desc")}>
      <span className={cx("title")}>{title_long ? title_long : "?"}</span>
      <div className={cx("genres")}>
        {genres && genres.map(genre => <Genre genre={genre} />)}
      </div>

      <span role="img">✨ {rating ? rating : "0.0"}</span>
      <span className={cx("runtime")}>runtime: {runtime ? runtime : "?"}</span>
      <LinesEllipsis
        text={summary}
        maxLine="4"
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
    </div>
  </div>
);

const Genre = ({ genre }) => {
  return <span>{genre} </span>;
};

export default MovieListItem;
