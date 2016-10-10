import React, { Component } from 'react';

import CardsStore from '../stores/CardsStore';
import CardActions from '../actions/CardActions';

export default class CategorySearchInput extends Component {
  constructor () {
    super();

    this.state = {
      randomCard: CardsStore.getRandomCard(),
      answer: false
    };

    this._onChange = this._onChange.bind(this);
    this._showAnswer = this._showAnswer.bind(this);
    this._getRandomCard = this._getRandomCard.bind(this);
  }

  componentWillMount () {
    CardsStore.startListening(this._onChange);
  }

  componentWillUnmount () {
    CardsStore.stopListening(this._onChange);
  }

  _onChange () {
    this.setState({
      randomCard: CardsStore.getRandomCard()
    });
  }

  _getRandomCard () {
    CardActions.getRandomCard();
    this.setState({
      answer: false
    });
  }

  _showAnswer () {
    this.setState({
      answer: true
    });
  }

  render () {
    let { randomCard, answer } = this.state;

    let RandomCard = [];
    if (randomCard !== undefined) {
      RandomCard =
        <div className='randomCard' key={randomCard.id}>
          <h4>{randomCard.category}</h4>
          <h3>{randomCard.question}</h3>
          {answer ? <h3>{randomCard.answer}</h3> : null}
          <button onClick={this._showAnswer} className='btn btn-default'>Answer</button>
        </div>;
    }
    console.log('randomCard in display: ', randomCard);
    return (
      <div>
        <button onClick={this._getRandomCard} className='btn btn-default'>Next</button>
          {RandomCard}
      </div>
    );
  }
}
