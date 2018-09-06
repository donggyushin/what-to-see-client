import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "components/Login/Login";
import * as userActions from "store/modules/user";
import * as movieActions from "store/modules/movies";

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

  _clickFacebookLoginButton = () => {
    const { apiFacebookLogin } = this.props;
    apiFacebookLogin();
  };

  componentDidMount() {
    const { removeMovieList } = this.props;
    removeMovieList();
  }

  render() {
    const { username, password } = this.state;
    return (
      <Login
        username={username}
        password={password}
        handleInput={this._handleInput}
        clickSignIn={this._clickSignIn}
        clickFacebookLoginButton={this._clickFacebookLoginButton}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  apiLogin: (username, password) =>
    dispatch(userActions.apiLogin(username, password)),
  apiFacebookLogin: () => dispatch(userActions.apiFacebookLogin()),
  removeMovieList: () => dispatch(movieActions.removeMovieList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
