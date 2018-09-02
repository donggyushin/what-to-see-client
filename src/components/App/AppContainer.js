import React, { Component } from "react";
import { connect } from "react-redux";
import App from "components/App/App";
import * as userActions from "store/modules/user";

class AppContainer extends Component {
  componentDidMount() {
    const { apiCheckLogin } = this.props;
    apiCheckLogin();
  }

  render() {
    const { isLoggedIn } = this.props;
    return <App isLoggedIn={isLoggedIn} />;
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  apiCheckLogin: () => dispatch(userActions.apiCheckLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
