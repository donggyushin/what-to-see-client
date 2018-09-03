import React, { Component } from "react";
import { connect } from "react-redux";
import NavigationVar from "components/NavigationVar/NavigationVar";

class NavigationVarContainer extends Component {
  render() {
    const { clickListIcon } = this.props;
    return <NavigationVar clickListIcon={clickListIcon} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationVarContainer);
