import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from './Components/Page404'
import Start from './Components/Start'


function App() {
    return (
      <Router>
          <Switch>
              <Route path="/login" component={Page404} />
              <Route path="/signup" component={Page404} />
              <Route path="/notes" component={Page404} />
              <Route path="/notes/:id" component={Page404} />
              <Route path="/" component={Start} />
          </Switch>
      </Router>
  );
}

export default App;