import React from 'react';

const Modal = (props) => {
    if(!props.show) {
        return null
    }
    return (
        <div className="modal_wrapper">
            { props.children }
        </div>
    )
}

export default Modal;