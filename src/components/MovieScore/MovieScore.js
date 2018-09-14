import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const MovieScore = ({ score_loading, star, handleSelect, clickButton }) => {
  return (
    <div className={cx("container")}>
      <select onChange={handleSelect}>
        <option value="1">
          <span role="img" aria-label="star">
            ✨
          </span>
        </option>
        <option value="2">
          <span role="img" aria-label="star">
            ✨✨
          </span>
        </option>
        <option value="3">
          <span role="img" aria-label="star">
            ✨✨✨
          </span>
        </option>
        <option value="4">
          <span role="img" aria-label="star">
            ✨✨✨✨
          </span>
        </option>
        <option selected value="5">
          <span role="img" aria-label="star">
            ✨✨✨✨✨
          </span>
        </option>
      </select>
      {score_loading ? (
        "loading..."
      ) : (
        <span className={cx("star")}>{star}</span>
      )}
      <button onClick={clickButton}>submit</button>
    </div>
  );
};

export default MovieScore;
