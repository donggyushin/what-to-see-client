import React, { Component } from "react";
import { connect } from "react-redux";
import CommentsList from "components/CommentsList/CommentsList";

class CommentsListContainer extends Component {
  state = {
    loading: true
  };

  componentWillUpdate(nextProps) {
    if (!this.props.comments && nextProps.comments) {
      this.setState({
        ...this.state,
        loading: false
      });
    }
  }

  render() {
    const { loading } = this.state;
    const { comments, movie } = this.props;
    return <CommentsList loading={loading} comments={comments} movie={movie} />;
  }
}

const mapStateToProps = state => ({
  comments: state.movies.comments
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsListContainer);
