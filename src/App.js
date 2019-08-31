import React from 'react';
import './assets/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import Principal from './components/users/Principal';
import Profile from './components/users/Profile';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/profile/user/:id" component={Profile} />
    </Switch>
  );
}

export default App;
