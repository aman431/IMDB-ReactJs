import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route extact path ='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
