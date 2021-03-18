import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import HomePage from '../src/pages/homepage/homepage';
import ShopPage from './pages/shop/shop.jsx';
import Header from './components/header/header';
// BrowserRouter as Router, Switch,  

function App() {
  return (
    <div>
      <Header />
    
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
      </Switch>

    </div>
  );
}

export default App;
