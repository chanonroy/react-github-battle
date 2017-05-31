import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export function RepoGrid(props) {
  return (
    <ul className="popular__list">

      {props.repos.map((repo, index) => {
        return (
          <li key={repo.name} className="popular__item">
          <div className="popular__rank">#{index + 1}</div>
          <ul className="space-list-items">
            <li>
              <img
                className="popular__avatar"
                src={repo.owner.avatar_url}
                alt={'Avatar for ' + repo.owner.login}/>
            </li>
            <li className="popular__title"> <a href={repo.html_url}>{repo.name}</a></li>
            <li> @{repo.owner.login} </li>
            <li> {repo.stargazers_count} stars </li>
          </ul>
        </li>
        )
      })}

    </ul>
  )
}

RepoGrid.PropTypes = {
  repos: PropTypes.array.isRequired
}
