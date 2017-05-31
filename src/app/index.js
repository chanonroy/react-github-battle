var React = require('react');
var ReactDOM = require('react-dom');
import '../scss/main.scss';
import '../assets/_assets.js';

// state
// lifecycle hook
// UI

class App extends React.Component {
  render() {
    return (
      <div> Hello, {this.props.name}! </div>
    )
  }
}

ReactDOM.render(
  <App name="Chanon"/>,
  document.getElementById('app')
);
