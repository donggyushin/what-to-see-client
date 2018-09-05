import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NavigationList = ({ clickCloseSpan, clickLogoutSpan }) => (
  <div className={cx("container")}>
    <span onClick={clickLogoutSpan} className={cx("word")}>
      logout
    </span>

    <span className={cx("close")} onClick={clickCloseSpan}>
      close
    </span>
  </div>
);

export default NavigationList;
