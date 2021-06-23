
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import Signup from './component/Signup';
import Table from './component/Table';

function App() {
  return (
    <div className="wrapper">
     
      <BrowserRouter>
        <Switch>
        <Route path="/Dashboard">
            <Dashboard/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Signup">
            <Signup/>
          </Route>
          <Route path="/Table">
            <Table/>
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;