import React, { Component } from "react";
import { connect } from "react-redux";
import App from "components/App/App";
import * as userActions from "store/modules/user";

class AppContainer extends Component {
  state = {
    navigationVisiable: false
  };

  _clickCloseSpan = () => {
    this.setState({
      ...this.state,
      navigationVisiable: false
    });
  };

  _clickListIcon = () => {
    this.setState({
      ...this.state,
      navigationVisiable: true
    });
  };

  componentDidMount() {
    const { apiCheckLogin } = this.props;
    apiCheckLogin();
  }

  render() {
    const { isLoggedIn, errorModalVisiable } = this.props;
    const { navigationVisiable } = this.state;
    return (
      <App
        isLoggedIn={isLoggedIn}
        navigationVisiable={navigationVisiable}
        clickListIcon={this._clickListIcon}
        clickCloseSpan={this._clickCloseSpan}
        errorModalVisiable={errorModalVisiable}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  errorModalVisiable: state.user.errorModalVisiable
});

const mapDispatchToProps = dispatch => ({
  apiCheckLogin: () => dispatch(userActions.apiCheckLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
