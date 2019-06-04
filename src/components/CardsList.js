import React, { Component } from "react";
import { TYPE_1, TYPE_2, TYPE_3, NODATA } from "../utils/constants";

import Card_1 from "./card_1/Card_1";
import Card_2 from "./card_2/Card_2";
import Card_3 from "./card_3/Card_3";
import NoCard from "./nocard/NoCard";

class CardsList extends Component {
  componentDidMount() {
    console.log("cards", this.props);
    this.props.getCards(this.props.location.id);
  }

  render() {
    if (this.props.cards && this.props.cards.length > 0) {
      return (
        <div>
          {this.props &&
            this.props.cards &&
            this.props.cards.map(items => {
              if (items.type === TYPE_1) {
                return <Card_1 {...items} />;
              }
              if (items.type === TYPE_2) {
                return <Card_2 {...items} />;
              }
              if (items.type === TYPE_3) {
                return <Card_3 {...items} />;
              }
            })}
        </div>
      );
    } else {
      return (
        <div>
          <NoCard noData={NODATA} />
        </div>
      );
    }
  }
}

export default CardsList;
