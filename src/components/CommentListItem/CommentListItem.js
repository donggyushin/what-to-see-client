import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import ReplyListContainer from "components/ReplyList/ReplyListContainer";

const cx = classNames.bind(styles);

const CommentListItem = ({
  id,
  username,
  message,
  reply,
  clickReplySpan,
  clickDeleteSpan
}) => (
  <div className={cx("container")}>
    <div>
      <span className={cx("username")}>{username}</span>
      <span className={cx("message")}>{message}</span>
      {/* <span className={cx("reply")} onClick={() => clickReplySpan(id)}>
        Reply
      </span> */}
      <span className={cx("reply")} onClick={() => clickDeleteSpan(id)}>
        delete
      </span>
    </div>

    {reply && <ReplyListContainer />}
  </div>
);

export default CommentListItem;
