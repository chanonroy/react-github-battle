import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
var api = require('../utils/api');

function SelectLanguage(props) {
  // Stateless functional component
  var languages = ['All', 'JavaScript', 'Ruby', 'CSS', 'Python'];

  return (
    <ul className="languages">
      {languages.map((lang) => {
        return (
          <li
            style={lang === props.selectedLanguage ? { color: 'red' } : null }
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>

  )
}

SelectLanguage.PropTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

function RepoGrid(props) {
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

export class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang,
        repos: null
      }
    })

    api.fetchPopularRepos(lang)
       .then(function (repos) {
         this.setState(function() {
           return {
             repos: repos
           }
         })
    }.bind(this));
  }

  render() {

    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos ? <p> Loading </p> : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}
