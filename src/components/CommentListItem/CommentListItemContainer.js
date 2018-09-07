import React, { Component } from "react";
import { connect } from "react-redux";
import CommentListItem from "components/CommentListItem/CommentListItem";

class CommentListItemContainer extends Component {
  render() {
    return <CommentListItem {...this.props} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListItemContainer);
