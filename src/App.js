import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ Home } />
        </Switch>
      </div>
    );
  }
}

export default App;
