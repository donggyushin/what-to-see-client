import React, { Component } from "react";
import { connect } from "react-redux";
import MovieListItem from "components/MovieListItem/MovieListItem";

class MovieListItemContainer extends Component {
  render() {
    return <MovieListItem {...this.props} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListItemContainer);
