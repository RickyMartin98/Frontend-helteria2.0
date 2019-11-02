import React from 'react';

const Card = function (props) {
    const styleCard = {
        maxWidth: "20rem"
       }
       console.log("Props en card ",props);
       const { platillo } = props;
       console.log("platillo en card 1 : ",platillo[0]);
       
       const { nombre , precio, disponible} = platillo[0];
      // console.log("El nombre es: ",nombre);
    return (
        <div className="card text-white bg-primary mb-3" style={styleCard}>
               <div className="card-header">{nombre}</div>
               <div className="card-body">
                 <h4 className="card-title">{precio}------------------ $</h4>
                     <p className="card-text">Disponible - {disponible}</p>
               </div>
               <div className="card-footer">
                    <p>algo</p>
               </div>
         </div>
    );
}

export default Card;