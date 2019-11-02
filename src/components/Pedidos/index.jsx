import React from 'react';

const Pedidos = function () {
    return (
        <table class="table table-hover">
            <thead>
                <tr class="table-primary">
                    <th scope="row">Num. pedido</th>
                    <td>Nombre</td>
                    <td>Platillo</td>
                    <td>Bebida</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Carlos</td>
                    <td>Hotdogs</td>
                    <td>Agua de Horchata</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Miguel</td>
                    <td>Tacos</td>
                    <td>Coca</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Antonio</td>
                    <td>Enchiladas</td>
                    <td>Agua de jamaica</td>
                </tr>
            </thead>
        </table>  
    );
}

export default Pedidos;