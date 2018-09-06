import React, { Component } from "react";
import { connect } from "react-redux";
import App from "components/App/App";
import * as userActions from "store/modules/user";
import * as movieActions from "store/modules/movies";

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
    const { isLoggedIn, errorModalVisiable, movieDetailVisiable } = this.props;
    const { navigationVisiable } = this.state;
    return (
      <App
        isLoggedIn={isLoggedIn}
        movieDetailVisiable={movieDetailVisiable}
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
  errorModalVisiable: state.user.errorModalVisiable,
  movieDetailVisiable: state.movies.movie_detail_visiable
});

const mapDispatchToProps = dispatch => ({
  apiCheckLogin: () => dispatch(userActions.apiCheckLogin()),
  logout: () => dispatch(userActions.apiLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
