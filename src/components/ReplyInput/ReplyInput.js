import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ReplyInput = () => {
  return (
    <div className={cx("container")}>
      <input placeholder="leave a reply" type="text" />
    </div>
  );
};

export default ReplyInput;
