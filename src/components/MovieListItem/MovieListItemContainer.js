import React, { Component } from "react";
import { connect } from "react-redux";
import MovieListItem from "components/MovieListItem/MovieListItem";
import * as movieActions from "store/modules/movies";

class MovieListItemContainer extends Component {
  _clickMovieListItem = id => {
    const { turnOnDetailView, apiGetMovieDetail } = this.props;
    turnOnDetailView();
    apiGetMovieDetail(id);
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
  apiGetMovieDetail: id => dispatch(movieActions.apiGetMovieDetail(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListItemContainer);
