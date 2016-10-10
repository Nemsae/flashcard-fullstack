import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  sendCardsResults (cards) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_CARDS',
      payload: { cards }
    });
  },

  sendCardById (card) {
    AppDispatcher.dispatch({
      type: 'RECIEVE_CARD_ID',
      payload: { card }
    });
  }
};

export default ServerActions;
