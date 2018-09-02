import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "components/Login/Login";

class LoginContainer extends Component {
  render() {
    return <Login />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
