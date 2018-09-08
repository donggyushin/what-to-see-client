import React, { Component } from "react";
import { connect } from "react-redux";
import ReplyList from "components/ReplyList/ReplyList";

class ReplyListContainer extends Component {
  state = {
    loading: true
  };

  componentWillUpdate(nextProps) {
    if (!this.props.replies && nextProps.replies) {
      this.setState({
        ...this.state,
        loading: false
      });
    }
  }

  render() {
    const { loading } = this.state;
    const { replies } = this.props;
    return <ReplyList loading={loading} replies={replies} />;
  }
}

const mapStateToProps = state => ({
  replies: state.reply.replies
});

const mapDispatchToProps = dipsatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReplyListContainer);
