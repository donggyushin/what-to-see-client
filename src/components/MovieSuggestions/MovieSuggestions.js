import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import Loading from "components/Loading/Loading";

const cx = classNames.bind(styles);

const MovieSuggestions = ({
  loading,
  movieSuggestions,
  titleVisiable,
  clickSuggestionMovie
}) => (
  <div className={cx("container")}>
    <h3>Suggestions</h3>
    <hr />
    {loading ? (
      <Loading />
    ) : (
      <MovieSuggestionsItemContainer
        suggestions={movieSuggestions}
        titleVisiable={titleVisiable}
        clickSuggestionMovie={clickSuggestionMovie}
      />
    )}
  </div>
);

const MovieSuggestionsItemContainer = ({
  suggestions,
  titleVisiable,
  clickSuggestionMovie
}) => (
  <div className={cx("ItemContainer")}>
    {suggestions &&
      suggestions.map(suggestion => (
        <MovieSuggestionsItem
          key={suggestion.id}
          {...suggestion}
          titleVisiable={titleVisiable}
          clickSuggestionMovie={clickSuggestionMovie}
        />
      ))}
  </div>
);

const MovieSuggestionsItem = ({
  id,
  title,
  medium_cover_image,
  small_cover_image,
  background_image,
  titleVisiable,
  clickSuggestionMovie
}) => {
  console.log("medium_cover_image: " + medium_cover_image);
  return (
    <div className={cx("Item")}>
      <img
        alt="poster"
        src={medium_cover_image}
        onClick={() => clickSuggestionMovie(id)}
      />
      <span className={cx("title")}>{title}</span>
    </div>
  );
};

export default MovieSuggestions;
