import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
var ReactRouter = require('react-router-dom');

import { Nav } from '../components/nav';
import { Home } from './home';
import { Battle } from './battle';
import { Popular } from './popular';

var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route render={function() {
              return <p> Not Found </p>
            }}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
