import React, {useState, useEffect} from 'react';
import db from '../../firebase';

const Principal = function (params) {
const [bebidas, setBebidas] = useState([]);

    useEffect( async () => {
        console.log(db);
      
        /*db.collection('Bebidas').onSnapshot((snapShots) => {
            setBebidas(snapShots.docs.map(doc => {
                return {id:doc.id, data: doc.data()}
            }));
        }),
        error => {
            console.log(error);
        }*/
    },[]);

    return (
        <div>
            <h1>Bienvenido al principal Compi</h1>
            <ul>
                { bebidas.map( bebida => <li>{bebida}</li>)}
            </ul>
        </div>
    );
}
export default Principal;