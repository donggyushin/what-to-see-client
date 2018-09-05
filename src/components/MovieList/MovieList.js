import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import MovieListItemContainer from "components/MovieListItem/MovieListItemContainer";

const cx = classNames.bind(styles);

const MovieList = ({ movies }) => (
  <div className={cx("container")}>
    {movies.map(movie => (
      <MovieListItemContainer key={movie.id} {...movie} />
    ))}
  </div>
);

export default MovieList;
