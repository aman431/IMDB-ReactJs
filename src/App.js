import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/signin';
import Register from './components/Register';
import Watchlist from './components/watchlist';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        username:"",
        password:"",
        isLoggedIn: false
      }
    };

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    handleSignIn = (e) => {
      if(this.username && this.password){
        this.setState({
          isLoggedIn: true
        });
        console.log(this.state.isLoggedIn);
      }

      else{
        console.log("error please give username and password");
      }

    }

  render(){
    return (
        <BrowserRouter>
          <Header />
          <div className="App">
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>

              <Route 
              exact 
              path='/signin'
              render={(props)=>{
                return(
                <SignIn 
                  handleChange = {this.handleChange}
                  handleSignIn = {this.handleSignIn}
                  username = {this.username}
                  password = {this.password}
                  isLoggedIn = {this.isLoggedIn}
                  {...props}
                />
                );
              }}
              />

              <Route exact path='/Register'>
  						  <Register />
  					  </Route>
              <Route exact path='/watchlist'>
                <Watchlist />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
