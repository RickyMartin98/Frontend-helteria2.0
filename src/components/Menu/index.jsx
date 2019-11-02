import React from 'react';
import Platillo from '../Platillo';
import platillosTest from './TestData.js'
const Menu = function () {
	console.log(platillosTest);
	const { Lunes }  = platillosTest;
	console.log(Lunes);
	return <div><Platillo platillo={platillosTest} /> </div>
}

export default Menu;