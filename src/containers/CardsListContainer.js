import { connect } from "react-redux";
import { getCards } from "../actions/data.actions";
import CardsList from "../components/CardsList";

const mapStateToProps = state => {
  return {
    cards: state.cards.cards.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCards: id => dispatch(getCards(id))
  };
};

const CardsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsList);

export default CardsListContainer;
