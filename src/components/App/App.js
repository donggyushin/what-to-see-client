import React from "react";
import styles from "./style.scss";
import classNames from "classnames/bind";
import { Route } from "react-router-dom";
import LoginContainer from "components/Login/LoginContainer";

const cx = classNames.bind(styles);

const App = ({ isLoggedIn }) => (
  <div>{isLoggedIn ? <PrivateComponent /> : <PublicComponent />}</div>
);

const PublicComponent = () => (
  <div>
    <LoginContainer />
  </div>
);

const PrivateComponent = () => <div>private page</div>;

export default App;
