import React, { Component } from 'react';

import CardsStore from '../stores/CardsStore';
import CardActions from '../actions/CardActions';

export default class CardDiv extends Component {
  constructor () {
    super();

    this.state = {
      card: CardsStore.getFlashCard(),
      editedCard: {}
    };

    this._onChange = this._onChange.bind(this);
    this._editCard = this._editCard.bind(this);
    this._submitChanges = this._submitChanges.bind(this);
    this._inputChange = this._inputChange.bind(this);
  }

  componentWillMount () {
    CardsStore.startListening(this._onChange);
  }

  componentWillUnmount () {
    CardsStore.stopListening(this._onChange);
  }

  _onChange () {
    this.setState({
      card: CardsStore.getFlashCard()
    });
  }

  _editCard (card, e) {
    e.preventDefault();
    this.setState({
      editedCard: card
    });
  }

  _inputChange (e) {
    let { editedCard } = this.state;
    let value = e.target.value;
    let target = e.target.id;
    editedCard[target] = value;
    this.setState({
      editedCard,
    });
  }

  _submitChanges (id, e) {
    let { editedCard } = this.state;
    // console.log('id: ', id);
    console.log('editedCard: ', editedCard);
    e.preventDefault();
    CardActions.sendEditedCard(editedCard);
  }

  render () {
    let { card } = this.state;
    let Card = [];
    if (card !== undefined) {
      Card =
        <div key={card.id}>
          <h3>{card.category}</h3>
          <h5>{card.question}</h5>
          <h5>{card.answer}</h5>
          <button className='btn btn-primary' data-toggle='modal' data-target='.bd-example-modal-sm' onClick={this._editCard.bind(null, card)}>Edit</button>
          <div className='modal fade bd-example-modal-sm' tabIndex='-1' role='dialog' aria-labelledby='mySmallModalLabel' aria-hidden='true'>
            <div className='modal-dialog modal-sm'>
              <div className='modal-content text-center'>
                <div className='modal-header'>
                  <h4 className='modal-title' id='myModalLabel'>Edit Card</h4>
                </div>
                <div className='modal-body'>
                  <input onChange={this._inputChange} id='question' type='text' defaultValue={card.question} />
                  <input onChange={this._inputChange} id='answer' type='text' defaultValue={card.answer} />
                  <input onChange={this._inputChange} id='category' type='text' defaultValue={card.category} />
                </div>
                <div className='modal-footer text-center'>
                  <button onClick={this._submitChanges.bind(null, card.id)} className='btn btn-primary'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>;
    }
    console.log('card in CardDiv: ', card);
    return (
      <div>
        {Card}
      </div>
      // {/* <div>
      //   {
      //     <div key={card.id}>
      //       <h3>{card.category}</h3>
      //       <h5>{card.question}</h5>
      //       <h5>{card.answer}</h5>
      //       {/* <button className='btn btn-default' onClick={this._editCard}>Edit</button> */}
      //     </div>
      //   }
      // </div> */}
    );
  }
}
