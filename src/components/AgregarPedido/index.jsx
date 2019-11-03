import React from 'react';

const AgregarPedido = function () {
    return(
            <form>
                <fieldset>
                    <legend>Legend</legend>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>      
                    <button type="button" className="btn btn-primary">Save changes</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </fieldset>
        </form>
    );
}

export default AgregarPedido;