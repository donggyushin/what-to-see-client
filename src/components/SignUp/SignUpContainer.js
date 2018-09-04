import React, { Component } from "react";
import { connect } from "react-redux";
import SignUp from "components/SignUp/SignUp";
import * as userActions from "store/modules/user";

class SignUpContainer extends Component {
  state = {
    username: "",
    password: "",
    displayName: ""
  };

  _handleInput = event => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === "username") {
      this.setState({
        ...this.state,
        username: value
      });
    }
    if (name === "password") {
      this.setState({
        ...this.state,
        password: value
      });
    }
    if (name === "displayName") {
      this.setState({
        ...this.state,
        displayName: value
      });
    }
  };

  _clickSignUpButton = () => {
    const { apiSignUp } = this.props;
    const { username, password, displayName } = this.state;

    apiSignUp(username, password, displayName);
    this.setState({
      ...this.state,
      username: "",
      password: "",
      displayName: ""
    });
  };

  render() {
    const { username, password, displayName } = this.state;
    return (
      <SignUp
        username={username}
        password={password}
        displayName={displayName}
        handleInput={this._handleInput}
        clickSignUpButton={this._clickSignUpButton}
        history={this.props.history}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  apiSignUp: (username, password, displayName) =>
    dispatch(userActions.apiSignUp(username, password, displayName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
