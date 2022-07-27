import React from 'react'
import "./modalCheckout.css"
const modalCheckout = (modalCheckout) => {
    return (
        <div className={modalCheckout ? "open" : "close"}>
            <div></div>
        </div>
    );
}

export default modalCheckout;