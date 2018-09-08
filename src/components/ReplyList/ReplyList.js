import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import ReplyInputContainer from "components/ReplyInput/ReplyInputContainer";
import Loading from "components/Loading/Loading";
import ReplyListItemContainer from "components/ReplyListItem/ReplyListItemContainer";

const cx = classNames.bind(styles);

const ReplyList = ({ loading, replies }) => (
  <div className={cx("container2")}>
    <ReplyInputContainer />
    {loading
      ? "getting replies..."
      : replies.map(reply => (
          <ReplyListItemContainer key={reply.id} {...reply} />
        ))}
  </div>
);

export default ReplyList;
