import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import CardsPage from './components/CardsPage';
import EditPage from './components/EditPage';
import TestPage from './components/TestPage';

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute path='/cardspage' component={CardsPage} />
      <Route path='/editpage' component={EditPage} />
      <Route path='/testpage' component={TestPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
