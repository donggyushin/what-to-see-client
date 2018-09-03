import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "components/Login/Login";
import * as userActions from "store/modules/user";

class LoginContainer extends Component {
  state = {
    username: "",
    password: ""
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
  };

  _clickSignIn = () => {
    const { apiLogin } = this.props;
    const { username, password } = this.state;
    apiLogin(username, password);
  };

  render() {
    const { username, password } = this.state;
    return (
      <Login
        username={username}
        password={password}
        handleInput={this._handleInput}
        clickSignIn={this._clickSignIn}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  apiLogin: (username, password) =>
    dispatch(userActions.apiLogin(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
