import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import Loading from "components/Loading/Loading";

const cx = classNames.bind(styles);

const MovieSuggestions = ({ loading, movieSuggestions, titleVisiable }) => (
  <div className={cx("container")}>
    <h3>Suggestions</h3>
    <hr />
    {loading ? (
      <Loading />
    ) : (
      <MovieSuggestionsItemContainer
        suggestions={movieSuggestions}
        titleVisiable={titleVisiable}
      />
    )}
  </div>
);

const MovieSuggestionsItemContainer = ({ suggestions, titleVisiable }) => (
  <div className={cx("ItemContainer")}>
    {suggestions &&
      suggestions.map(suggestion => (
        <MovieSuggestionsItem
          key={suggestion.id}
          {...suggestion}
          titleVisiable={titleVisiable}
        />
      ))}
  </div>
);

const MovieSuggestionsItem = ({
  id,
  title,
  medium_cover_image,
  titleVisiable
}) => (
  <div className={cx("Item")}>
    <img
      alt="poster"
      src={
        medium_cover_image
          ? medium_cover_image
          : require("../../media/error.png")
      }
    />
    <span className={cx("title")}>{title}</span>
  </div>
);

export default MovieSuggestions;
