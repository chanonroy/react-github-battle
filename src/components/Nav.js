import React from 'react';
import ReactDOM from 'react-dom';
var NavLink = require('react-router-dom').NavLink; // if style is active

export function Nav() {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='nav__active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='nav__active' to='/battle'>
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='nav__active' to='/popular'>
          Popular
        </NavLink>
      </li>
    </ul>
  )
}
