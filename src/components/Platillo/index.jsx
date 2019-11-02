import React, { Fragment } from 'react';
import Card from '../Card';
const Platillo = function (props) {
    const flexDesign = {
        marginTop: '15px',
        display: "flex",
        flexWrap: 'col',
        justifyContent: "space-between",
        alignItems: 'center',

    };
    console.log("Props en platillo ",props);
   const { platillo } = props;
   console.log("platillo en platillo ",platillo[1]);
   
    const { Lunes } = platillo[0];
    const { Martes } = platillo[1];
    const { Miercoles } = platillo[2];
    const { Jueves } = platillo[3];
    const { Viernes } = platillo[4];
    console.log("Los dias son ",Lunes,Martes,Miercoles);


    return(
        <div className="container-fluid">
            <div  style={flexDesign}>
                <Card platillo={Lunes}/>
                <Card platillo={Martes}/>
                <Card platillo={Miercoles}/>
                <Card platillo={Jueves}/>
                <Card platillo={Viernes}/>
            </div>
        </div>
    );
}

export default Platillo;