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

        {
                user ? <div><p>Hello, {user.displayName}</p> </div>
                :<p>please , sign in</p>
            }
            {
                user ? <button className="btn btn-danger" onClick={signOut} >Sign out</button>
                : <button onClick={signInWithGoogle} className="btn btn-dark">Sign in with Google</button>
            }
           
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

