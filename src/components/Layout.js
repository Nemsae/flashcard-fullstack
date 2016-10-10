import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class Layout extends Component {
  // constructor () {
  //   super();
  // }

  render () {
    let path = this.props.location.pathname;
    // console.log('path: ',path)
    // console.log('props: ',this.props)

    // let searchClasses = classNames({ active: path === '/search'})

    return (
      <div className='container'>
        <h1>My Flashcards</h1>

        <ul className='nav nav-tabs'>
          <li role='presentation' className={classNames({active: path === '/cardspage'})}>
            <Link to='/cardspage'>Cards Page</Link>
          </li>
          <li role='presentation' className={classNames({active: path === '/editpage'})}>
            <Link to={'/editpage'} >Edit Cards</Link>
          </li>
          <li role='presentation' className={classNames({active: path === '/testpage'})}>
            <Link to={'/testpage'} >Test Urself</Link>
          </li>
          {/* <li role='presentation' className={classNames({ active: path === `/gifplayground/${this.props.params.id}`})}>
            <Link to={`/gifplayground/${this.props.params.id}`} >Blah</Link>
          </li> */}

        </ul>

        {this.props.children}

      </div>
    );
  }
}
