import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import Loading from "components/Loading/Loading";

const cx = classNames.bind(styles);

const MovieDetail = ({ loading, clickCloseSpan, movie }) => (
  <div className={cx("container")}>
    <div className={cx("box")}>
      <div className={cx("header")}>
        <span onClick={clickCloseSpan}>close</span>
      </div>
      <div className={cx("body")}>
        {loading ? <Loading /> : <MovieDetailBody movie={movie} />}
      </div>
    </div>
  </div>
);

const MovieDetailBody = ({ movie }) => (
  <div className={cx("MovieDetailContainer")}>
    <div className={cx("left")}>
      <img alt="movie_poster" src={movie.large_cover_image} />
    </div>
    <div className={cx("right")}>
      <h2 className={cx("title")}>{movie.title_long}</h2>
      <span role="img">✨ {movie.rating}</span>
      <div className={cx("genres")}>
        {movie.genres &&
          movie.genres.map(genre => <Genre key={genre.id} genre={genre} />)}
      </div>
      <span className={cx("download_count")}>
        download count : {movie.download_count}
      </span>
      <span className={cx("like_count")}>like count : {movie.like_count}</span>
      <p className={cx("desc")}>
        <span>synopsis</span>
        <hr />
        {movie.description_full}
      </p>
      <div className={cx("buttonContainer")}>
        <button role="img" className={cx("down_button")}>
          download ⬇️
        </button>
      </div>
    </div>
  </div>
);

const Genre = ({ genre }) => <span>{genre} </span>;

export default MovieDetail;
