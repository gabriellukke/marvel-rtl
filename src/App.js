import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ Home } />
      </Switch>
    );
  }
}

export default App;
