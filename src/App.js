import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/signin';
import Register from './components/Register';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/signin'>
              <SignIn />
            </Route>
            <Route exact path='/Register'>
						  <Register />
					  </Route>
          </Switch>
        </div> 
      </BrowserRouter>
  );
}

export default App;
