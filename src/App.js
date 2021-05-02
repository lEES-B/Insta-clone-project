import React from 'react';
import './App.scss';
import { Link, Route, Switch } from 'react-router-dom'
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/'>
          <Login />
        </Route>

        <Route path="/:id"> 
          <div>
            <p>🚫 Invalid Page</p> 
            <p>Please click below to back to the main page on our website.</p>
            <p> <Link to="/">Move to main page on Instagram</Link> </p>
          </div>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
