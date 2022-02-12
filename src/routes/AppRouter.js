import React, { useEffect, useState } from 'react';
import  {firebase} from "../firebase/firebase-config";
import { useDispatch } from 'react-redux';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter'
import { login } from '../action/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { startLoadingNotes } from '../action/notes';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);


  useEffect(() => {
    firebase.auth().onAuthStateChanged( async (user) => {

      if (user?.uid){
        dispatch( login(user.uid, user.displayName) );
        setIsLoggedIn( true );

        //importar las notas
        dispatch( startLoadingNotes(user.uid) )

      } else {
        setIsLoggedIn( false ); 
      }

      setChecking( false );

    });
  }, [ dispatch ] );

  if( checking ){
    return(
      <h1> Wait... </h1>
    )
  }
  

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={ AuthRouter }
            isAutenticated={ isLoggedIn }
          />

          <PrivateRoute
            exact
            isAutenticated={ isLoggedIn }
            path="/"
            component={ JournalScreen }
          />

        </Switch>
      </div>
  </Router>
  )
};
