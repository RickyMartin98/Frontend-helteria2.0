import React, { useState,  useEffect } from 'react';
import Platillo from '../Platillo';
import platillosTest from './TestData.js';
import providers from '../Login';
import firebase from 'firebase';


const Menu = function () {
	const [bebidas, setBebidas] = useState([]);

	useEffect(async () => {
		const data = firebase.database();
        let refToData = data.ref("Bebida");
        let refToPlatillos = data.ref("Platillos");
        refToData.on("child_added", function ( snapshot) {
            //console.log("La bebida actual es: ",snapshot.val());
            console.log(bebidas);
            setBebidas([...bebidas,snapshot.val()]);
            console.log("El id actual es: ",snapshot.key);
        });
	},[]);
	




	console.log("PROVIDERS: ",providers);
	console.log(platillosTest);
	const { Lunes }  = platillosTest;
	console.log(Lunes);
	return <div><Platillo platillo={platillosTest} /> 
		
	</div>
}

export default Menu;