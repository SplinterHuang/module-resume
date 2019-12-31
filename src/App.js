import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Router, Route, Link ,hashHistory} from 'react-router'
import Demo1 from './pages/Demo1.js'
import Workplace from './pages/Workplace.js'
import Default from './pages/Default.js'
import Store from './Store.js'
import "./styles/reset.scss"
import "./styles/form.scss"
import { Provider } from 'react-redux'
 function RoutedApp(){
  return (
    <Provider store={Store}>
      <Router history={hashHistory} >
        <Route path="/" component={Default} />
        <Route path="/workplace" component={Workplace} />
        <Route path="/demo1" component={Demo1} />
      </Router>
    </Provider>
    )
}
export default RoutedApp;