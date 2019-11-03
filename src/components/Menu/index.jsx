import React from 'react';
import Platillo from '../Platillo';
import platillosTest from './TestData.js';
import providers from '../Login';


const Menu = function () {
	console.log("PROVIDERS: ",providers);
	console.log(platillosTest);
	const { Lunes }  = platillosTest;
	console.log(Lunes);
	return <div><Platillo platillo={platillosTest} /> </div>
}

export default Menu;