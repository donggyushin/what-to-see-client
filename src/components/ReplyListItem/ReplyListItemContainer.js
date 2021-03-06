import React, { Component } from "react";
import { connect } from "react-redux";
import ReplyListItem from "components/ReplyListItem/ReplyListItem";

class ReplyListItemContainer extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <ReplyListItem {...this.props} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReplyListItemContainer);
