import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Footer,
  Header,
  PreFooter,
  PreHeader
} from './components';
import {
  CheckOut,
  Error404,
  Home,
  Login,
  ProductDetails,
  ProductList,
  ShoppingCart
} from './containers';
import './App.css';

function App() {
  return (
    <div className="App">
      <PreHeader />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/checkout" component={CheckOut} />
        <Route path="/login" component={Login} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/product-details/:id" component={ProductDetails} />
        <Route component={Error404} />
      </Switch>
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
