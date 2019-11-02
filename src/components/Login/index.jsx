import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);


const Login = function (props) {
    const { user , signOut, signInWithGoogle } = props;

    return (
        <div>
              <header className="App-header">
        
        <p>
          Bienvenido a Helteria, Continua saludable
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
                user ? <p>Hello, {user.displayName}</p>
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

