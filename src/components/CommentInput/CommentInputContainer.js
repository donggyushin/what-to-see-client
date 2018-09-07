import React, { Component } from "react";
import { connect } from "react-redux";
import CommentInput from "components/CommentInput/CommentInput";
import * as movieActions from "store/modules/movies";

class CommentInputContainer extends Component {
  state = {
    message: ""
  };
  _handleInput = event => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      message: value
    });
  };
  _onPressEnter = event => {
    const name = event.key;
    const { apiInputComment, movie } = this.props;
    const { message } = this.state;
    if (name === "Enter") {
      apiInputComment(message, movie.id);
      this.setState({
        ...this.state,
        message: ""
      });
    }
  };
  render() {
    const { message } = this.state;
    return (
      <CommentInput
        message={message}
        handleInput={this._handleInput}
        onPressEnter={this._onPressEnter}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  apiInputComment: (message, id) =>
    dispatch(movieActions.apiInputComment(message, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentInputContainer);
