import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CharacterDetails from './pages/CharacterDetails';
import NotFound from './pages/NotFound';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ Home } />
        <Route path="/character/:id" component={ CharacterDetails } />
        <Route component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
