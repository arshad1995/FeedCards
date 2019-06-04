import { connect } from "react-redux";
import { getFeeds } from "../actions/data.actions";
import FeedsList from "../components/FeedsList";

const mapStateToProps = state => {
  return {
    feeds: state.feeds.feeds.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFeeds: () => dispatch(getFeeds())
  };
};

const FeedsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedsList);

export default FeedsListContainer;
