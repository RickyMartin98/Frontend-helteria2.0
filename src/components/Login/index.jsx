import React, { useState} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Redirect } from 'react-router-dom';
/*import firebaseConfig from '../../firebase';*/

/*const firebaseApp = firebase.initializeApp(firebaseConfig);*/
import firebaseApp from '../../firebase';

const Login = function (props) {

   

    const { user , signOut, signInWithGoogle } = props;

    const handleOut = () => {

    }
    /*const renderIsLoged = () => {
        if (user) {
            return (
                <div>
                    <img src={user.photoURL} alt={user.displayName}></img>
                    <p>Hola, Bienvenid@ {user.displayName}</p>
                    <button onClick={handleOut} >Salir</button>
                </div>
            );
        }
    }*/
    return (
        <div>
              <header className="App-header">
        
        <p>
          Bienvenido a Helteria, Continua saludable
        </p>
       
        {
                user ? <div><p>Hello, {user.displayName}</p> <Redirect to="/Principal"/></div>
                :<p>please , sign in</p>
            }
            {
                user ? <button onClick={signOut} >Sign out</button>
                : <button onClick={signInWithGoogle}>Sign in with Google</button>
            }

        </header>
           
        </div>
    );

}

const firebaseAppAuth = firebaseApp.auth();

const providers  = {
    googleProvider: new firebase.auth.GoogleAuthProvider()   
};


export default withFirebaseAuth({
    providers,
    firebaseAppAuth
})(Login);

//xport default Login;

