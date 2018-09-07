import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CommentInput = ({ message, handleInput, onPressEnter }) => (
  <div className={cx("container")}>
    <input
      type="text"
      value={message}
      onChange={handleInput}
      placeholder="Leave a comment!"
      onKeyPress={onPressEnter}
    />
  </div>
);

export default CommentInput;
