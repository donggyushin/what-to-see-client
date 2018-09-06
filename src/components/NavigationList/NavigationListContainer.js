import React, { Component } from "react";
import { connect } from "react-redux";
import NavigationList from "components/NavigationList/NavigationList";
import * as userActions from "store/modules/user";
import * as movieActions from "store/modules/movies";

class NavigationListContainer extends Component {
  _clickLogoutSpan = () => {
    const { apiLogout, clickCloseSpan } = this.props;
    clickCloseSpan();
    apiLogout();
  };

  render() {
    const { clickCloseSpan } = this.props;
    return (
      <NavigationList
        clickCloseSpan={clickCloseSpan}
        clickLogoutSpan={this._clickLogoutSpan}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  apiLogout: () => dispatch(userActions.apiLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationListContainer);
