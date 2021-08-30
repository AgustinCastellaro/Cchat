import { useState, useEffect } from 'react';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Room from './pages/Room';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from './firebase';
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
        <Login />
      ) : (
        <Router>
          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/chat/:userId" component={Room} />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
