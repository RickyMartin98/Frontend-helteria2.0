import React from 'react';

const NotFound = function () {
    const font = {
        fontSize: "50px",
        height: "100%"
    }
    return (
       <div>
            <p className="alert-warning" style={font}>Wooops!! this page doesn't exist :(</p> 
       </div>
    );
}
export default NotFound;