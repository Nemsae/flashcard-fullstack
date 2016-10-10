import React, { Component } from 'react';

// import CardSearchInput from './CardSearchInput';
import CardActions from '../actions/CardActions';

export default class CardSearchInput extends Component {
  constructor () {
    super();

    this.state = {
      id: ''
    };

    this._grabInput = this._grabInput.bind(this);
    this._getCard = this._getCard.bind(this);
  }

  _grabInput (e) {
    let input = e.target.value;
    console.log('input: ', input);
    this.setState({
      id: input
    });
  }

  _getCard () {
    let { id } = this.state;
    CardActions.fetchCardById(id);
  }

  render () {
    return (
      <div>
        <input onChange={this._grabInput} type='text' placeholder='Search by ID' />
        <button onClick={this._getCard} className='btn btn-default'>Get</button>
        {/* <button className='btn btn-default'>Edit</button> */}
      </div>
    );
  }
}
