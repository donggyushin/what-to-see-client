import React, { Component } from "react";
import { connect } from "react-redux";
import MovieListItem from "components/MovieListItem/MovieListItem";
import * as movieActions from "store/modules/movies";

class MovieListItemContainer extends Component {
  _clickMovieListItem = id => {
    const {
      turnOnDetailView,
      apiGetMovieDetail,
      apiGetMovieSuggestions
    } = this.props;
    turnOnDetailView();
    apiGetMovieDetail(id);
    apiGetMovieSuggestions(id);
  };

  render() {
    return (
      <MovieListItem
        {...this.props}
        clickMovieListItem={this._clickMovieListItem}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  turnOnDetailView: () => dispatch(movieActions.turnOnDetailView()),
  apiGetMovieDetail: id => dispatch(movieActions.apiGetMovieDetail(id)),
  apiGetMovieSuggestions: id =>
    dispatch(movieActions.apiGetMovieSuggestions(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListItemContainer);
