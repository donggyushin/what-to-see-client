import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import Loading from "components/Loading/Loading";
import CommentListItemContainer from "components/CommentListItem/CommentListItemContainer";
import CommentInputContainer from "components/CommentInput/CommentInputContainer";

const cx = classNames.bind(styles);

const CommentsList = ({ loading, comments, movie }) => (
  <div className={cx("container")}>
    <CommentInputContainer movie={movie} />
    {loading ? (
      <Loading />
    ) : (
      comments.map(comment => (
        <CommentListItemContainer key={comment.id} {...comment} />
      ))
    )}
  </div>
);

export default CommentsList;
