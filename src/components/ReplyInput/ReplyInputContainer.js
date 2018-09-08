import React, { Component } from "react";
import { connect } from "react-redux";
import ReplyInput from "components/ReplyInput/ReplyInput";

class ReplyInputContainer extends Component {
  render() {
    return <ReplyInput />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReplyInputContainer);
