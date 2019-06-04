import React, { Component } from "react";

import FeedsListContainer from "./containers/FeedListContainer";
import CardsListContainer from "./containers/CardsListContainer";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={FeedsListContainer} exact={true} />
          <Route path="/cards" component={CardsListContainer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
