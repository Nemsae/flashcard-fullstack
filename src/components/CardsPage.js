import React, { Component } from 'react';

import CardsTable from './CardsTable';
import CardsForm from './CardsForm';

export default class SearchPage extends Component {

  render () {
    return (
      <div className='text-center'>
        <h1>Cards Page</h1>
        <div className='row'>
          <CardsForm />
        </div>
        <div className='row'>
          <CardsTable />
        </div>
      </div>
    );
  }
}
