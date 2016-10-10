import React, { Component } from 'react';

import CategorySearchInput from './CategorySearchInput';
import RandomCardDisplay from './RandomCardDisplay';

export default class TestPage extends Component {

  render () {
    return (
      <div>
        <h1>Test Urself</h1>
        <div className='row'>
          <CategorySearchInput />
        </div>
        <div className='row'>
          <RandomCardDisplay />
        </div>
      </div>
    );
  }
}
