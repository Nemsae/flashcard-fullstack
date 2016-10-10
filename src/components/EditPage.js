import React, { Component } from 'react';

import CardSearchInput from './CardSearchInput';
import CardDiv from './CardDiv';

export default class EditPage extends Component {

  render () {
    return (
      <div>
        <h1>Edit Flashcards</h1>
        <div className='row'>
          <CardSearchInput />
        </div>
        <div className='row'>
          <CardDiv />
        </div>
      </div>
    );
  }
}
