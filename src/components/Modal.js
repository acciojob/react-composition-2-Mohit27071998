import React from 'react';

const Modal = ({ show, onClose, children }) => {
  const modalStyle = {
    backgroundColor: 'lightblue',
    height: '150px',
    width: '250px',
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" style={modalStyle}>
      <button className="modal-close" onClick={onClose}>
        Close
      </button>
      {children}
    </div>
  );
};

export default Modal;
