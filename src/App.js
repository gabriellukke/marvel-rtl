import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

import './App.css';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
