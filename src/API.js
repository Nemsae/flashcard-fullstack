import axios, { get, post, put } from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  recieveCards () {
    get('/flashcards/')
      .then((response) => {
        // console.log('response: ', response);
        ServerActions.sendCardsResults(response.data);
      })
      .catch((err) => {
        console.log('Error! API.recieveCards: ', err);
      });
  },

  recieveCardById (id) {
    get(`/flashcards/${id}`)
      .then((res) => {
        // console.log('res in API: ', res.data);
        ServerActions.sendCardById(res.data[0]);
      })
      .catch((err) => {
        console.log('Error! API.recieveCardById: ', err);
      });
  },

  //  delete
  // include recieveCards (get all) at the end of it
  deleteCard (id) {
    axios.delete(`/flashcards/${id}`)
      .then((res) => {
        this.recieveCards();
        // console.log('res in API delete: ', res);
      })
      .catch((err) => {
        console.log('Error! API.deleteCard: ', err);
      });
  },

  postNewCard (newCard) {
    // console.log('newCard: ', newCard);
    // console.log('newCardcat: ', newCard.category);
    post(`/flashcards/${newCard.category}/`, newCard)
      .then((response) => {
        // console.log(response);
        this.recieveCards();
      })
      .catch((err) => {
        console.log('Error! API.postNewCard: ', err);
      });
  },

  updateCard (editedCard) {
    let id = editedCard.id;
    put(`/flashcards/${id}`, editedCard)
      .then((res) => {
        console.log('res: ', res);
      })
      .catch((err) => {
        console.log('Error! API.postNewCard: ', err);
      });
  }

};

export default API;
