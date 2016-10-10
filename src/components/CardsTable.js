import React, { Component } from 'react';

import CardActions from '../actions/CardActions';
import CardsStore from '../stores/CardsStore';

export default class CardsTable extends Component {
  constructor () {
    super();

    this.state = {
      flashcards: CardsStore.getFlashCards()
    };

    this._onChange = this._onChange.bind(this);
    this._fetchCards = this._fetchCards.bind(this);
    this._removeCard = this._removeCard.bind(this);
  }

  componentWillMount () {
    CardsStore.startListening(this._onChange);
    CardActions.fetchCards();
  }

  componentWillUnmount () {
    CardsStore.stopListening(this._onChange);
  }

  _onChange () {
    // CardActions.fetchCards();
    this.setState({
      flashcards: CardsStore.getFlashCards()
    });
  }

  _fetchCards () {
    CardActions.fetchCards();
  }

  _removeCard (id) {
    console.log('id: ', id);
    CardActions.deleteCard(id);
  }

  render () {
    let { flashcards } = this.state;
    // console.log('flashcards in table: ', flashcards);
    return (
      <div>
        <button onClick={this._fetchCards} className='btn btn-default'>Give me my cards</button>
        <table className='table'>
          <thead>
            <tr>
              <th>Category</th>
              <th>Question</th>
              <th>Answer</th>
              <th>ID</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              flashcards.map((flashcard) => (
                <tr key={flashcard.id}>
                  <td>{flashcard.category}</td>
                  <td>{flashcard.question}</td>
                  <td>{flashcard.answer}</td>
                  <td>{flashcard.id}</td>
                  <button className='btn btn-danger' onClick={() => this._removeCard(flashcard.id)}>X</button>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}
