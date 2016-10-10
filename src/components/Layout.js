import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class Layout extends Component {

  render () {
    let path = this.props.location.pathname;

    return (
      <div className='container text-center'>
        <h1>My Flashcards</h1>
        <ul className='nav nav-tabs'>
          <li role='presentation' className={classNames({active: path === '/'})}>
            <Link to='/'>Cards Page</Link>
          </li>
          <li role='presentation' className={classNames({active: path === '/editpage'})}>
            <Link to={'/editpage'} >Edit Cards</Link>
          </li>
          <li role='presentation' className={classNames({active: path === '/testpage'})}>
            <Link to={'/testpage'} >Test Urself</Link>
          </li>
        </ul>

        {this.props.children}

      </div>
    );
  }
}
