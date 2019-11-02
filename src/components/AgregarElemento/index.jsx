import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import config from '../../firebase';

const AgregarElemento = function () {
    console.log(firebase);
    const [platillo, setPlatillo] = useState({nombre: '', precio: 0,descripcion:''});
    const getValues = (e) => {
            console.log([e.target.name],e.target.value);
            setPlatillo({...platillo,[e.target.name]: e.target.value});
        }

    const onSubimit = (e) => {
        e.preventDefault();
        enviarDatos();
    }

    const enviarDatos = () => {
        console.log(config);
        
        console.log(firebase);
       // firebase.initializeApp(config);

       // console.log("Firebase: ",firebase);
       // var basedatos = firebase.database();
         //var referencia = basedatos.ref("Bebida");
        /* referencia.push({
            nombre: platillo.nombre,
            precio: platillo.precio,
            descripcion: platillo.decripcion
         }, function () {
            console.log("Guardado exitosamente");
         });*/
           
    }


    const { nombre, precio, descripcion } = platillo;
    return( 

        <form onSubmit={enviarDatos}>
        <fieldset>
          <legend>Agregar Elemento</legend>
          <div className="form-group">
                <label for="exampleInputEmail1">Nombre platillo</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name="nombre" placeholder="Enter Nombre" onChange={getValues} value={nombre} />
          </div>
          <div className="form-group">
            <label className="control-label">Input addons</label>
                <div className="form-group">
                    <div className="input-group mb-3">
                         <div className="input-group-prepend">
                              <span className="input-group-text">$</span>
                         </div>
                         <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" name="precio" onChange={getValues} value={precio}/>
                         <div className="input-group-append">
                             <span className="input-group-text">.00</span>
                        </div>
                     </div>
                </div>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Descripcion </label>
              <textarea className="form-control" name="descripcion" onChange={getValues} value={descripcion}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Agregar</button>
        </fieldset>
      </form>
    );
}

export default AgregarElemento;