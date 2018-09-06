import React, { Component } from "react";
import { connect } from "react-redux";
import MovieSuggestions from "components/MovieSuggestions/MovieSuggestions";

class MovieSuggestionsContainer extends Component {
  state = {
    loading: true,
    titleVisiable: false
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
    return (
      <MovieSuggestions
        loading={loading}
        movieSuggestions={movieSuggestions}
        titleVisiable={titleVisiable}
      />
    );
  }
}

const mapStateToProps = state => ({
  movieSuggestions: state.movies.movie_suggestions
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSuggestionsContainer);
