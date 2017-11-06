import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Info from './Components/Info.jsx';
import './css/index.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' component={Info} />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
