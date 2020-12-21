import React from 'react';
import Navbar from './components/Navbar';
import {Login} from './components/Login';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Anh from './components/pages/Anh';
import Em from './components/pages/Em';
import Places from './components/pages/Places';
import {ProtectedRoute} from './protected.route'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <ProtectedRoute path='/' exact component={Home} />
          <ProtectedRoute path='/em' component={Em} />
          <ProtectedRoute path='/anh' component={Anh} />
          <ProtectedRoute path='/tmpweb' exact component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
