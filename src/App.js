import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/signin';
import Register from './components/Register';
import Watchlist from './components/watchlist';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

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
      },console.log(this.state.username));
    };

    handleSignIn = () => {
      if(this.state.username && this.state.password){
        this.setState({
          isLoggedIn: true
        },console.log("Working",this.state.isLoggedIn));
      }

      else{
        console.log("error please give username and password");
      }

    }

  render(){
    const {username,password,isLoggedIn} = this.state;
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
                  username = {username}
                  password = {password}
                  isLoggedIn = {isLoggedIn}
                  {...props}
                />
                );
              }}
              />

              <Route exact path='/Register'>
  						  <Register />
  					  </Route>
              <Route 
              exact 
              path='/watchlist'
              render = {(props)=>{
                if(isLoggedIn){
                  return <Watchlist {...props}/>
                } else {
                  return <Redirect to='/signin' />
                }
              }}
              />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
