import React from "react";
import styles from "./style.scss";
import classNames from "classnames/bind";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginContainer from "components/Login/LoginContainer";
import NavigationVarContainer from "components/NavigationVar/NavigationVarContainer";
import NavigationListContainer from "components/NavigationList/NavigationListContainer";
import ErrorMessageContainer from "components/ErrorMessage/ErrorMessageContainer";
import SignUpContainer from "components/SignUp/SignUpContainer";
import MovieListContainer from "components/MovieList/MovieListContainer";
import MovieDetailContainer from "components/MovieDetail/MovieDetailContainer";

const cx = classNames.bind(styles);

const App = ({
  isLoggedIn,
  navigationVisiable,
  clickListIcon,
  clickCloseSpan,
  errorModalVisiable,
  movieDetailVisiable
}) => (
  <div>
    {errorModalVisiable && <ErrorMessageContainer />}

    {isLoggedIn ? (
      <PrivateComponent
        navigationVisiable={navigationVisiable}
        clickListIcon={clickListIcon}
        clickCloseSpan={clickCloseSpan}
        movieDetailVisiable={movieDetailVisiable}
      />
    ) : (
      <PublicComponent />
    )}
  </div>
);

const PublicComponent = () => (
  <Router>
    <div>
      <Route exact path="/" component={LoginContainer} />
      <Route path="/signup" component={SignUpContainer} />
    </div>
  </Router>
);

const PrivateComponent = ({
  navigationVisiable,
  clickListIcon,
  clickCloseSpan,
  movieDetailVisiable
}) => (
  <Router>
    <div className={cx("private_container")}>
      <NavigationVarContainer clickListIcon={clickListIcon} />
      {navigationVisiable && (
        <NavigationListContainer clickCloseSpan={clickCloseSpan} />
      )}
      <MovieListContainer />
      {movieDetailVisiable && <MovieDetailContainer />}
    </div>
  </Router>
);

export default App;
