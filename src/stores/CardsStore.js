import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import _ from 'lodash';

let _flashcards = [];
let _flashcard = undefined;
let _categories = [];
let _categorizedCards = [];
let _randomCard = undefined;
let _message = '';

class CardsStore extends EventEmitter {
  constructor () {
    super();

    AppDispatcher.register((action) => {
      let { type, payload } = action;
      switch (type) {
        case 'RECEIVE_CARDS': {
          _flashcards = payload.cards;
          console.log('_flashcards: ', _flashcards);
          this.emit('CHANGE');
          break;
        }

        case 'RECIEVE_CARD_ID': {
          _flashcard = payload.card;
          console.log('_flashcard: ', _flashcard);
          this.emit('CHANGE');
          break;
        }

        case 'GET_CATEGORIES': {
          _randomCard = undefined;
          // console.log('categories in store: ', payload.categories);
          _categories = payload.categories;
          _categorizedCards = this.categorizeCards();
          // console.log('categorizedCards in store: ', _categorizedCards);
          // this.getRandomCard();
          this.emit('CHANGE');
          break;
        }

        case 'GET_RANDOM_CARD': {
          _randomCard = this.randomCard();
          console.log('_randomCard: ', _randomCard);
          this.emit('CHANGE');
          break;
        }
      }
    });
    //  storage
  }

  randomCard () {
    // console.log('_categorizedCards.length: ', _categorizedCards.length);
    if (_categorizedCards.length === 0) {
      _message = 'No more Cards!';
      return;
    }
    let randomCard = _categorizedCards.pop();

    return randomCard;
  }

  categorizeCards () {
    // console.log('_flashcards: ', _flashcards);
    // console.log('_categories: ', _categories);
    let cardsCategorized = _flashcards.filter((card) => {
      let test = _categories.indexOf(card.category);

      if (test === 0 || test === 1) {
        return card;
      } else return;
    });
    cardsCategorized = _.shuffle(cardsCategorized);
    return cardsCategorized;
  }

  startListening (cb) {
    this.on('CHANGE', cb);
  }

  stopListening (cb) {
    this.removeListener('CHANGE', cb);
  }

  getFlashCards () {
    return _flashcards;
  }

  getFlashCard () {
    return _flashcard;
  }

  getRandomCard () {
    return _randomCard;
  }

  getMessage () {
    return _message;
  }
}

export default new CardsStore();
