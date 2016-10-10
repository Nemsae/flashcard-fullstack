import React, { Component } from 'react';

import CardActions from '../actions/CardActions';
import CardsStore from '../stores/CardsStore';

export default class CardsForm extends Component {
  constructor () {
    super();

    this.state = {
      question: '',
      answer: '',
      category: ''
    };

    this._grabQuestion = this._grabQuestion.bind(this);
    this._grabAnswer = this._grabAnswer.bind(this);
    this._grabCategory = this._grabCategory.bind(this);
    this._submitCard = this._submitCard.bind(this);
  }

  _grabQuestion (e) {
    let input = e.target.value;
    this.setState({
      question: input
    });
  }

  _grabAnswer (e) {
    let input = e.target.value;
    this.setState({
      answer: input
    });
  }

  _grabCategory (e) {
    let input = e.target.value;
    this.setState({
      category: input
    });
  }

  _submitCard (e) {
    e.preventDefault();
    let { question, answer, category } = this.state;

    let newCard = {
      question,
      answer,
      category
    };

    CardActions.sendNewCard(newCard);
  }

  render () {
    // let { flashcards } = this.state;
    // console.log('flashcards in table: ', flashcards);
    return (
      <div>
        <form>
          <div className='form-group row'>
            <label htmlFor='Question' className='col-sm-2 col-htmlForm-label'>Question</label>
            <div className='col-sm-10'>
              <input onChange={this._grabQuestion} type='text' className='htmlForm-control' id='Question' placeholder='Question' />
            </div>
          </div>
          <div className='htmlForm-group row'>
            <label htmlFor='Answer' className='col-sm-2 col-htmlForm-label'>Answer</label>
            <div className='col-sm-10'>
              <input onChange={this._grabAnswer} type='text' className='htmlForm-control' id='Answer' placeholder='Answer' />
            </div>
          </div>
          <div className='htmlForm-group row'>
            <label htmlFor='Category' className='col-sm-2 col-htmlForm-label'>Category</label>
            <div className='col-sm-10'>
              <input onChange={this._grabCategory} type='text' className='htmlForm-control' id='Category' placeholder='Category' />
            </div>
          </div>
          <div className='form-group row'>
            <div className='offset-sm-2 col-sm-10'>
              <button onClick={this._submitCard} type='submit' className='btn btn-primary'>Add Card</button>
            </div>
          </div>
        </form>

      </div>
    );
  }
}
