import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ErrorMessage = ({ clickCloseRedButton, errorMessage }) => (
  <div className={cx("container")}>
    <div className={cx("box")}>
      <div className={cx("image")}>
        <img alt="error" src={require("../../media/error.png")} />
      </div>
      <span className={cx("Error")}>Error</span>
      <p className={cx("message")}>{errorMessage}</p>
      <button onClick={clickCloseRedButton}>CLOSE</button>
    </div>
  </div>
);

export default ErrorMessage;
