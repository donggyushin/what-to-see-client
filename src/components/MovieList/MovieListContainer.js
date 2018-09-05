import React, { Component } from "react";
import { connect } from "react-redux";
import MovieList from "components/MovieList/MovieList";
import * as movieActions from "store/modules/movies";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import Loading from "components/Loading/Loading";

const cx = classNames.bind(styles);

class MovieListContainer extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { apiGetMovies } = this.props;
    apiGetMovies();
  }

  componentWillUpdate(nextProps) {
    if (!this.props.movies && nextProps.movies) {
      this.setState({
        ...this.state,
        loading: false
      });
    }
  }

  render() {
    const { loading } = this.state;
    const { movies } = this.props;
    return (
      <div className={cx("MovieListContainer")}>
        {loading ? <Loading /> : <MovieList movies={movies} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

const mapDispatchToProps = dispatch => ({
  apiGetMovies: () => dispatch(movieActions.apiGetMovies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainer);
