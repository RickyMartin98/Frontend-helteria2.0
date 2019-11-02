import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);


const Login = function (props) {
    const { user , signOut, signInWithGoogle } = props;

    return (
        <div>
            {
                user ? <p>Hello, {user.displayName}</p>
                :<p>please , sign in</p>
            }
            {
                user ? <button onClick={signOut} >Sign out</button>
                : <button onClick={signInWithGoogle}>Sign in with Google</button>
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

