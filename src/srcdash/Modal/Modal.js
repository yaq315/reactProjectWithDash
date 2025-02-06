import React from 'react';
import "./Modal.css"
function Modal({ newStudent, handleInputChange, addStudent, toggleModal }) {
  return (
    <div className="modal-overlay" style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center",
      alignItems: "center", zIndex: 1000
    }}>
      <div className="modal" style={{
        backgroundColor: "white", padding: "20px", borderRadius: "8px",
        width: "300px", textAlign: "center"
      }}>
        <input type="text" name="name" placeholder="Name" value={newStudent.name} onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email" value={newStudent.email} onChange={handleInputChange} />
        <input type="text" name="phone" placeholder="Phone" value={newStudent.phone} onChange={handleInputChange} />
        <input type="number" name="age" placeholder="Age" value={newStudent.age} onChange={handleInputChange} />
        <button onClick={addStudent}>Add</button>
        <button onClick={toggleModal}>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
