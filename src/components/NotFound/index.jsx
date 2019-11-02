import React from 'react';

const NotFound = function () {
    const font = {
        fontSize: "100px",
        height: "500px"
    }
    return (
        <p className="alert-warning" style={font}>Wooops!! this page doesn't exist :(</p>
    );
}
export default NotFound;