import React, { Component } from "react";
import store from "store";
import { Provider } from "react-redux";
import AppContainer from "components/App/AppContainer";

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default Root;
