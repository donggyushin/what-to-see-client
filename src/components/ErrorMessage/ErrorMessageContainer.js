import React, { Component } from "react";
import { connect } from "react-redux";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import * as userActions from "store/modules/user";

class ErrorMessageContainer extends Component {
  _clickCloseRedButton = () => {
    const { closeModal } = this.props;

    closeModal();
  };

  render() {
    const { errorMessage } = this.props;
    return (
      <ErrorMessage
        clickCloseRedButton={this._clickCloseRedButton}
        errorMessage={errorMessage}
      />
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.user.errorMessage
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(userActions.closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorMessageContainer);
