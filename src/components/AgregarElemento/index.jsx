import React, { useState } from 'react';
import swal from 'sweetalert2';

import firebase from '../../firebase';

const AgregarElemento = function () {
    console.log("Este es firebase ",firebase);
    const styleForm = {
        width: '300px',
        display: 'flex',
        justifyConten: 'center',
        alignItems: 'center',
    }

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
        alert("Entro");
        var database = firebase.database();
        var referencia = database.ref("Bebida");

        referencia.push({
            nombre: platillo.nombre,
            precio: platillo.precio,
            descripcion: platillo.descripcion
        },function () {
            //alert("Se ha registrador correctamente");
            swal.fire({
                title:'Agregado!',
                text: 'Tu item ha sido agregado correctamente',
                type: 'succsess'
            });
        })
        
    }


    const { nombre, precio, descripcion } = platillo;
    return( 
    <div className="container-fluid">
        <form onSubmit={onSubimit} style={styleForm}>
        <fieldset>
          <legend>Agregar Elemento</legend>
          <div className="form-group">
                <label>Nombre platillo</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name="nombre" placeholder="Enter Nombre" onChange={getValues} value={nombre} />
          </div>
          <div className="form-group">
            <label className="control-label">Precio</label>
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
              <label >Descripcion </label>
              <textarea className="form-control" name="descripcion" onChange={getValues} value={descripcion}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Agregar</button>
        </fieldset>
      </form>
    </div>
    );
}

export default AgregarElemento;