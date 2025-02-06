import React, { useState } from 'react';
import "./Table.css";

// المصفوفة التي تحتوي على بيانات الطلاب
const studentsData = [
  { name: "Ahmed", age: 5, email: "ahmed@example.com", phone: "123456789" },
  { name: "Sara", age: 6, email: "sara@example.com", phone: "987654321" },
  { name: "Omar", age: 7, email: "omar@example.com", phone: "123123123" },
  { name: "Laila", age: 6, email: "laila@example.com", phone: "321321321" },
  { name: "Ali", age: 8, email: "ali@example.com", phone: "987987987" },
  { name: "Noor", age: 5, email: "noor@example.com", phone: "654654654" },
  { name: "Maha", age: 9, email: "maha@example.com", phone: "741741741" },
  { name: "Khaled", age: 7, email: "khaled@example.com", phone: "852852852" },
  { name: "Yara", age: 10, email: "yara@example.com", phone: "963963963" },
  { name: "Amir", age: 6, email: "amir@example.com", phone: "123789456" },
  { name: "Layla", age: 8, email: "layla@example.com", phone: "789456123" },
  { name: "Faisal", age: 9, email: "faisal@example.com", phone: "321654987" },
  { name: "Hassan", age: 7, email: "hassan@example.com", phone: "852963741" },
  { name: "Reem", age: 6, email: "reem@example.com", phone: "654123987" },
  { name: "Zain", age: 10, email: "zain@example.com", phone: "963852741" },
  { name: "Jana", age: 5, email: "jana@example.com", phone: "123654987" },
  { name: "Tariq", age: 8, email: "tariq@example.com", phone: "789321654" },
  { name: "Mariam", age: 9, email: "mariam@example.com", phone: "741258369" },
  { name: "Salim", age: 7, email: "salim@example.com", phone: "963147852" },
  { name: "Dina", age: 6, email: "dina@example.com", phone: "258963741" }
];

function Table() {
  const [students, setStudents] = useState(studentsData);
  const [showModal, setShowModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    phone: "",
    age: ""
  });

  
  const handleAddStudentClick = () => {
    setShowModal(true);
  };


  const handleCloseModal = () => {
    setShowModal(false);
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value
    }));
  };

  
  const handleAddStudent = () => {
    if (newStudent.name && newStudent.email && newStudent.phone && newStudent.age) {
      setStudents((prevStudents) => [...prevStudents, newStudent]);
      setShowModal(false); 
      setNewStudent({ name: "", email: "", phone: "", age: "" }); 
    } else {
      alert("Please fill in all fields.");
    }
  };

  
  const handleEditStudent = (index) => {
    const student = students[index];
    setNewStudent(student);
    setShowModal(true);
  };


  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div className="recent_order">
      <h2>Schedule of Students</h2>
      <button onClick={handleAddStudentClick}>Add Student</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{newStudent.name ? "Edit Student" : "Add Student"}</h3>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={newStudent.name}
              onChange={handleInputChange}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={newStudent.email}
              onChange={handleInputChange}
            />
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={newStudent.phone}
              onChange={handleInputChange}
            />
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={newStudent.age}
              onChange={handleInputChange}
            />
            <button onClick={handleAddStudent}>Save</button>
            <button onClick={handleCloseModal}>Cancel</button>
          </div>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.age}</td>
              <td>
                <button onClick={() => handleEditStudent(index)}>Edit</button>
                <button onClick={() => handleDeleteStudent(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
}

export default Table;
