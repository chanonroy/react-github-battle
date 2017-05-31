import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class Users extends React.Component {

  render() {
    let friends = ['Brian', 'Amy', 'Bill'];
    return (
      <div>
        <h1> Friends </h1>
        <ul>
          {friends.map((user) => {
            return <li key={user}>{user}</li>
          })}
        </ul>
      </div>
    )
  }
}
