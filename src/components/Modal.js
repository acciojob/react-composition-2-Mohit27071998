import React from 'react';
import '../styles/App.css'
const Modal = ({ show, onClose, children }) => {
  

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <button className="modal-close" onClick={onClose}>
        Close
      </button>
      {children}
    </div>
  );
};

export default Modal;
