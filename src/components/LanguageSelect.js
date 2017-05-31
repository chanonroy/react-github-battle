import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export function LanguageSelect(props) {
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

LanguageSelect.PropTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}
