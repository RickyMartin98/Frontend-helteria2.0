/*import * as firebase from 'firebase/app';*/
import 'firebase/auth';
import firebase from 'firebase';
/*import firebaseConfig from '../../firebase';*/

var config =  {
    apiKey: "AIzaSyBp1LUBqgGMa04ARVINRhhWhnTTwiDlQzg",
    authDomain: "helteria-db606.firebaseapp.com",
    databaseURL: "https://helteria-db606.firebaseio.com",
    projectId: "helteria-db606",
    storageBucket: "helteria-db606.appspot.com",
    messagingSenderId: "204905475365",
    appId: "1:204905475365:web:2572e2c4745b301db8fecc",
    measurementId: "G-3BPPKF24QG"
  }
 
  /*const firebaseApp = */
  
   firebase.initializeApp(config);
   export default firebase;