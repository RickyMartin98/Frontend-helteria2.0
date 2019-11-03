import React, { Component } from 'react'
import aguaFresca from '../../img/agua_fresca.jpg';
import cafe from '../../img/cafe.jpg';
import chilaquiles from '../../img/chilaquiles.jpg';
import hamburguesa from '../../img/hamburguesa.jpg';
import jugo from '../../img/jugo.jpg';
import polloPlancha from '../../img/pollo_plancha.jpg';
import gelatina from '../../img/gelatina.jpg';
import frutaPicada from '../../img/frutaPicada.jpg';
import semillas from '../../img/semillas.jpg';
import './menu.css';


const Promociones = function (){


    return(

        <div>
            <section className="secPlatillos">

                <div className="container">

                    <div className="platillo" id="platillo1">
                        <img className="img" src={hamburguesa} alt="platillo1"/>
                        <h1>hamburguesa</h1>
                        <p></p>
                        <input type="button" className="btnplatillo1" id="btnplatillo1" value="Encargar"/>
                    </div>

                    <div className="platillo" id="platillo2">
                        <img className="img" src={polloPlancha} alt="platillo2"/>
                        <h1>Pollo a la plancha</h1>
                        <p></p>
                        <input type="button" className="btnplatillo2" id="btnplatillo2" value="Encargar"/>
                    </div>
                            
                    <div className="platillo" id="platillo3">
                        <img className="img" src={chilaquiles} alt="platillo3"/>
                        <h1>hamburguesa</h1>
                        <p></p>
                        <input type="button" className="btnplatillo3" id="btnplatillo3" value="Encargar"/>
                    </div>

                </div>

            </section>

            <section className="secBebidas">

                <div className="container">

                    <div className="bebida" id="bebida1">
                        <img className="img" src={aguaFresca} alt=""/>
                        <h1>Café</h1>
                        <p></p>
                        <input type="button" className="btnbebida1" id="btnbebida1" value="Encargar"/>
                    </div>

                    <div className="bebida" id="bebida2">
                        <img className="img" src={cafe} alt=""/>
                        <h1>Agua Fresca</h1>
                        <p></p>
                        <input type="button" className="btnbebida2" id="btnbebida2" value="Encargar"/>
                    </div>

                    <div className="bebida" id="bebida3">
                        <img className="img" src={jugo} alt=""/>
                        <h1>Jugos</h1>
                        <p></p>
                        <input type="button" className="btnbebida3" id="btnbebida3" value="Encargar"/>
                    </div>
                    
                </div>

            </section>

            <section className="secSnacks">

                <div className="container">

                    <div className="snack" id="snack1">
                        <img className="img" src={gelatina} alt=""/>
                        <h1>Gelatina</h1>
                        <p></p>
                        <input type="button" className="btnsnack1" id="btnsnack1" value="Encargar"/>
                    </div>

                    <div className="snack" id="snack2">
                        <img className="img" src={frutaPicada} alt=""/>
                        <h1>Fruta Picada</h1>
                        <p></p>
                        <input type="button" className="btnsnack2" id="btnsnack2" value="Encargar"/>
                    </div>
                        
                    <div className="snack" id="snack3">
                        <img className="img" src={semillas} alt=""/>
                        <h1>Semillas</h1>
                        <p></p>
                        <input type="button" className="btnsnack3" id="btnsnack3" value="Encargar"/>
                    </div>

                </div>

            </section>
        </div>

    );

}

export default Promociones;