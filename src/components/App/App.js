import React from "react";
import styles from "./style.scss";
import classNames from "classnames/bind";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginContainer from "components/Login/LoginContainer";
import NavigationVarContainer from "components/NavigationVar/NavigationVarContainer";
import NavigationListContainer from "components/NavigationList/NavigationListContainer";
import ErrorMessageContainer from "components/ErrorMessage/ErrorMessageContainer";
import SignUpContainer from "components/SignUp/SignUpContainer";

const cx = classNames.bind(styles);

const App = ({
  isLoggedIn,
  navigationVisiable,
  clickListIcon,
  clickCloseSpan,
  errorModalVisiable
}) => (
  <div>
    {errorModalVisiable && <ErrorMessageContainer />}

    {isLoggedIn ? (
      <PrivateComponent
        navigationVisiable={navigationVisiable}
        clickListIcon={clickListIcon}
        clickCloseSpan={clickCloseSpan}
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
  clickCloseSpan
}) => (
  <div className={cx("private_container")}>
    <NavigationVarContainer clickListIcon={clickListIcon} />
    {navigationVisiable && (
      <NavigationListContainer clickCloseSpan={clickCloseSpan} />
    )}
  </div>
);

export default App;
