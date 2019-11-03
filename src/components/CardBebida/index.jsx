import React from 'react';

const CardBebida = function (props) {
        const { precio, descripcion, nombre } = props;
        const styleCard = {
            maxWidth: "30rem",

           }
    return (
        <div className="card text-white bg-primary mb-3" style={styleCard}>
            <div className="card-header">{nombre}</div>
            <div className="card-body">
                <h4 className="card-title">{descripcion}------------------{precio} $</h4>
                 <p className="card-text"></p>
            </div>
            <div className="card-footer">
               <label>Naranja <input type="radio" value="Naranja" /></label> 
               <label>Zanahoria <input type="radio" value="Zanahoria" /></label>
               <label>Verde <input type="radio" value="Verde" /></label>  
            </div>
        </div>
    );

}

export default CardBebida;