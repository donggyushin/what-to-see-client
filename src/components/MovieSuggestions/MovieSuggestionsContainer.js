import React, { Component } from "react";
import { connect } from "react-redux";
import MovieSuggestions from "components/MovieSuggestions/MovieSuggestions";
import * as movieActions from "store/modules/movies";

class MovieSuggestionsContainer extends Component {
  state = {
    loading: true,
    titleVisiable: false
  };

  _clickSuggestionMovie = id => {
    const {
      turnOffDetailView,
      removeMovieDetail,
      removeMovieSuggestions,
      removeComment,
      turnOnDetailView,
      apiGetMovieDetail,
      apiGetMovieSuggestions,
      apiGetComments
    } = this.props;
    turnOffDetailView();
    removeMovieDetail();
    removeMovieSuggestions();
    removeComment();

    setTimeout(function() {
      turnOnDetailView();
      apiGetMovieDetail(id);
      apiGetMovieSuggestions(id);
      apiGetComments(id);
    }, 200);
  };

  componentWillUpdate(nextProps) {
    if (!this.props.movieSuggestions && nextProps.movieSuggestions) {
      this.setState({
        ...this.state,
        loading: false
      });
    }
  }

  render() {
    const { loading, titleVisiable } = this.state;
    const { movieSuggestions } = this.props;
    const clickSuggestionMovie = this._clickSuggestionMovie;
    return (
      <MovieSuggestions
        loading={loading}
        movieSuggestions={movieSuggestions}
        titleVisiable={titleVisiable}
        clickSuggestionMovie={clickSuggestionMovie}
      />
    );
  }
}

const mapStateToProps = state => ({
  movieSuggestions: state.movies.movie_suggestions
});

const mapDispatchToProps = dispatch => ({
  turnOffDetailView: () => dispatch(movieActions.turnOffDetailView()),
  removeMovieDetail: () => dispatch(movieActions.removeMovieDetail()),
  removeMovieSuggestions: () => dispatch(movieActions.removeMovieSuggestions()),
  removeComment: () => dispatch(movieActions.removeComment()),
  turnOnDetailView: () => dispatch(movieActions.turnOnDetailView()),
  apiGetMovieDetail: id => dispatch(movieActions.apiGetMovieDetail(id)),
  apiGetMovieSuggestions: id =>
    dispatch(movieActions.apiGetMovieSuggestions(id)),
  apiGetComments: movieId => dispatch(movieActions.apiGetComments(movieId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSuggestionsContainer);
