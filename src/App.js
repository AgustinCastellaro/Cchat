import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  const [user, setUser] = useState();
  
  const authListener = async () => {
    await auth.onAuthStateChanged((userLogged) => {
      if(userLogged){
        console.log("Usuario logueado: ", userLogged)
        setUser(userLogged)
      }else{
        console.log("No hay un usuario logueado")
      }
    })
  }
  
  useEffect(() => {
    authListener()
  }, [])

  return (
    <div className="App">
      {!user ? (
        <Router>
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;