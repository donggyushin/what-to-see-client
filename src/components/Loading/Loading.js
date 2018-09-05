import React from "react";
import { Circle } from "better-react-spinkit";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Loading = () => (
  <div className={cx("container")}>
    <Circle color="white" size={40} />
  </div>
);

export default Loading;
