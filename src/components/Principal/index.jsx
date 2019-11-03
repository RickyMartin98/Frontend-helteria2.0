import React, {useState, useEffect} from 'react';
import firebase from '../../firebase';
import CardBebida from '../CardBebida';

const Principal = function (props) {
    //console.log("Props: ",props);
const [bebidas, setBebidas] = useState([]);
const [platillos, setPlatillos] = useState([]);


    useEffect( async () => {
        /*const data = firebase.database();
         data.collection("Bebida").get.then((querySnapshot) => {
             querySnapshot.forEach((doc) => {
                console.log("Bebida: ",`${doc.id} => ${doc.descripcion}`);
                /*setBebidas([...bebidas,doc]);*/
            /* });
         });*/
      const data = firebase.database();
        let refToData = data.ref("Bebida");
        let refToPlatillos = data.ref("Platillos");
        refToData.on("child_added", function ( snapshot) {
            //console.log("La bebida actual es: ",snapshot.val());
            console.log(bebidas);
            setBebidas([...bebidas,snapshot.val()]);
            console.log("El id actual es: ",snapshot.key);
        });
       /* refToData.once('value', snapshot => {
            var key = snapshot.key;
            console.log("La key es: ",key);
            var bebida1 = snapshot.child("Bebida").val();
            console.log("La bebida1 es: ",bebida1);
            setBebidas(snapshot.val());
            console.log(snapshot.val());
        });*/
       /* refToPlatillos.once('value', snapshot => {
            console.log("Platillos: ",snapshot.val());
        } )*/
        
    },[]);
    console.log("Bebidas: ",bebidas);
    
   return (
       <div>
           <h1>Hola</h1>
           <ul>
               {bebidas.map((bebida,key) => <CardBebida key={key} precio={bebida.precio} descripcion={bebida.descripcion} nombre={bebida.key}/>)}
           </ul>
       </div>
   );
    
}
export default Principal;