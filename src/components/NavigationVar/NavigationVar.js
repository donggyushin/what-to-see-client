import React from "react";
import styles from "./style.scss";
import classNames from "classnames/bind";
import { FaAlignJustify } from "react-icons/fa";

const cx = classNames.bind(styles);

const NavigationVar = ({ clickListIcon }) => (
  <div className={cx("container")}>
    <FaAlignJustify
      size={"2em"}
      className={cx("list")}
      onClick={clickListIcon}
    />
  </div>
);

export default NavigationVar;
