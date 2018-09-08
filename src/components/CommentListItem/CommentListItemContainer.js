import React, { Component } from "react";
import { connect } from "react-redux";
import CommentListItem from "components/CommentListItem/CommentListItem";
import * as replyActions from "store/modules/reply";
import * as movieActions from "store/modules/movies";

class CommentListItemContainer extends Component {
  state = {
    reply: false
  };

  _clickReplySpan = async id => {
    const { reply } = this.state;
    const { apiGetReplies, removeReplies } = this.props;
    if (reply) {
      //close reply list container
      this.setState({
        ...this.state,
        reply: false
      });
      removeReplies();
    } else {
      //open reply list container

      await apiGetReplies(id);
      this.setState({ ...this.state, reply: true });
    }
  };

  _clickDeleteSpan = id => {
    const { apiDeleteComment } = this.props;
    apiDeleteComment(id);
  };

  render() {
    const { reply } = this.state;
    const { _clickReplySpan, _clickDeleteSpan } = this;
    return (
      <CommentListItem
        {...this.props}
        reply={reply}
        clickReplySpan={_clickReplySpan}
        clickDeleteSpan={_clickDeleteSpan}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  apiGetReplies: commentId => dispatch(replyActions.apiGetReplies(commentId)),
  removeReplies: () => dispatch(replyActions.removeReplies()),
  apiDeleteComment: id => dispatch(movieActions.apiDeleteComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListItemContainer);
