import React, { Component } from "react";
import { connect } from "react-redux";
import MovieDetail from "components/MovieDetail/MovieDetail";
import * as movieActions from "store/modules/movies";
import * as starActions from "store/modules/star";

class MovieDetailContainer extends Component {
  state = {
    loading: true
  };

  _clickCloseSpan = () => {
    const {
      turnOffDetailView,
      removeMovieDetail,
      removeMovieSuggestions,
      removeComment,
      removeStar
    } = this.props;
    turnOffDetailView();
    removeMovieDetail();
    removeMovieSuggestions();
    removeComment();
    removeStar();
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      loading: true
    });
  }

  componentWillUpdate(nextProps) {
    if (!this.props.movieDetail && nextProps.movieDetail) {
      this.setState({
        ...this.state,
        loading: false
      });
    }
  }

  render() {
    const { loading } = this.state;
    const { movieDetail } = this.props;
    return (
      <MovieDetail
        loading={loading}
        clickCloseSpan={this._clickCloseSpan}
        movie={movieDetail}
      />
    );
  }
}

const mapStateToProps = state => ({
  movieDetail: state.movies.movie_detail
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  turnOffDetailView: () => dispatch(movieActions.turnOffDetailView()),
  removeMovieDetail: () => dispatch(movieActions.removeMovieDetail()),
  removeMovieSuggestions: () => dispatch(movieActions.removeMovieSuggestions()),
  removeComment: () => dispatch(movieActions.removeComment()),
  removeStar: () => dispatch(starActions.removeStar())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailContainer);
