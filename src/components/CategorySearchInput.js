import React, { Component } from 'react';

import CardActions from '../actions/CardActions';
import CardsStore from '../stores/CardsStore';

export default class CategorySearchInput extends Component {
  constructor () {
    super();

    this.state = {
      category: '',
      message: CardsStore.getMessage()
    };

    this._grabInput = this._grabInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._getCategories = this._getCategories.bind(this);
  }

  componentWillMount () {
    CardsStore.startListening(this._onChange);
  }

  componentWillUnmount () {
    CardsStore.stopListening(this._onChange);
  }

  _onChange () {
    this.setState({
      message: CardsStore.getMessage()
    });
  }

  _grabInput (e) {
    let input = e.target.value;
    this.setState({
      category: input
    });
  }

  _getCategories () {
    let { category } = this.state;
    let categories = category.split(', ');
    CardActions.fetchCardByCategory(categories);
  }

  render () {
    let { message } = this.state;

    return (
      <div>
        <h3>{message}</h3>
        <input onChange={this._grabInput} type='text' placeholder='Search by Category' />
        <button onClick={this._getCategories} className='btn btn-success'>√</button>
      </div>
    );
  }
}
