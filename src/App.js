import React from 'react';
import './App.scss';
import { Link, Route, Switch } from 'react-router-dom'
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>

        <Route path='/main'>
          <Main />
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
