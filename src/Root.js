import React, { Component } from "react";
import store from "store";
import { Provider } from "react-redux";
import AppContainer from "components/App/AppContainer";
import { BrowserRouter } from "react-router-dom";

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
