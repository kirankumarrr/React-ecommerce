import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from 'common/Header';
import configureStore from './store';

import './App.scss';
import Footer from 'common/Footer';
import Catalog from 'Pages/Catalog/Catalog';
import PageNotFound from 'Pages/NotFound';
function App() {
  return (
    <Provider store={configureStore()}>
      <div className='container'>
        <Header />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={Catalog} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
