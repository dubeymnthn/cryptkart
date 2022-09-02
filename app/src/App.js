

import { Route,Switch } from 'react-router-dom';

import DashBoard from './Pages/DashBoard';
import Login from './Pages/Login';
import Register from './Pages/Register';

import React from 'react';
import HomePage from './Pages/HomePage';

import About from './Pages/About';





function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/dashboard" exact component={DashBoard} />
        <Route path='/about' exact component={About} />

      </Switch>
      
    </div>
)
}

export default App;
