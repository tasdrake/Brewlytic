import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Fermentation from './Components/Fermentation.jsx';
import './css/index.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' component={Fermentation} />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
