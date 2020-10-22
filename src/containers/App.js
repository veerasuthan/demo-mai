import React from 'react';
import { Switch, Route } from "react-router-dom";

// pages containers
import Intro from './Intro';
import Questions from './Questions/index';

// Route wrapper
import PublicRoute from './PublicRoute'

function App() {
  return (
    <div>
      <Switch>
          <PublicRoute exact path="/" component={Intro} />
          <PublicRoute exact path="/questions" component={Questions} />
      </Switch>
    </div>
  );
}

export default App;
