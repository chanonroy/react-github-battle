import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
var api = require('../utils/api');

// Components
import { LanguageSelect } from '../components/LanguageSelect';
import { RepoGrid } from '../components/RepoGrid';

export class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() { // lifecycle hook
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
        <LanguageSelect
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos ? <p> Loading </p> : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}
