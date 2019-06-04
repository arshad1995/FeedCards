import React, { Component } from "react";
import FeedCard from "./FeedCard";
import { Link } from "react-router-dom";

class Feeds extends Component {
  componentDidMount() {
    this.props.getFeeds();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props &&
          this.props.feeds &&
          this.props.feeds.map(feed => (
            <Link
              to={{ pathname: "/Cards", id: feed.id }}
              style={{ textDecoration: "none" }}
            >
              <FeedCard feedCreator={feed.feedCreator} feedName={feed.name} />
            </Link>
          ))}
      </div>
    );
  }
}

export default Feeds;
