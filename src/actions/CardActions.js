import API from '../API';
import AppDispatcher from '../AppDispatcher';

const CardActions = {
  fetchCards () {
    API.recieveCards();
  },

  fetchCardById (id) {
    API.recieveCardById(id);
  },

  sendNewCard (newCard) {
    API.postNewCard(newCard);
  },

  getRandomCard () {
    AppDispatcher.dispatch({
      type: 'GET_RANDOM_CARD'
    });
  },

  fetchCardByCategory (categories) {
    AppDispatcher.dispatch({
      type: 'GET_CATEGORIES',
      payload: { categories }
    });
  },

  deleteCard (id) {
    API.deleteCard(id);
  },

  sendEditedCard (editedCard) {
    API.updateCard(editedCard);
  }

};

export default CardActions;
