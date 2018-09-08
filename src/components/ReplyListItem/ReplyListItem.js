import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ReplyListItem = ({ id, displayName, message }) => {
  return (
    <div className={cx("container")}>
      <span className={cx("username")}>{displayName}</span>
      <span className={cx("message")}>{message}</span>
    </div>
  );
};

export default ReplyListItem;
