import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from '../src/pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignAndSignUp from "./pages/gauth/log-sign";
import Header from './components/header/header';
import {auth} from './firebase/firebase.utils';
// BrowserRouter as Router, Switch,  

class App extends React.Component {
  constructor(){
  super();
    this.state ={
      currentUser: null
    }
  }


  unsubscribeFromAuth = null


  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.group(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignAndSignUp}/>
        </Switch>
  
      </div>
    );
  }
}
 
export default App;
