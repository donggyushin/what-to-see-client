import React, { Component } from "react";
import { connect } from "react-redux";
import MovieScore from "components/MovieScore/MovieScore";
import * as starActions from "store/modules/star";

class MovieScoreContainer extends Component {
  state = {
    score: "5",
    score_loading: true
  };

  _clickButton = () => {
    const { apiSendStar } = this.props;
    const { score } = this.state;
    apiSendStar(this.props.movie.id, score);
  };

  _handleSelect = event => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      score: value
    });
  };

  componentWillUpdate(nextProps) {
    if (!this.props.star && nextProps.star) {
      this.setState({
        score_loading: false
      });
    }
  }

  componentDidMount() {
    const { apiGetStar } = this.props;
    setTimeout(() => {
      apiGetStar(this.props.movie.id);
    }, 2000);
  }

  render() {
    const { score_loading } = this.state;
    const { star } = this.props;
    return (
      <MovieScore
        score_loading={score_loading}
        star={star}
        handleSelect={this._handleSelect}
        clickButton={this._clickButton}
      />
    );
  }
}

const mapStateToProps = state => ({
  star: state.star.star
});

const mapDispatchToProps = dispatch => ({
  apiGetStar: movieId => dispatch(starActions.apiGetStar(movieId)),
  apiSendStar: (movieId, score) =>
    dispatch(starActions.apiSendStar(movieId, score))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieScoreContainer);
