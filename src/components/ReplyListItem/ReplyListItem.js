import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ReplyListItem = ({ id, username, message }) => {
  return (
    <div className={cx("container")}>
      <span className={cx("username")}>{username}</span>
      <span className={cx("message")}>{message}</span>
    </div>
  );
};

export default ReplyListItem;
