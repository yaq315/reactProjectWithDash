import React, { useState } from 'react';
import './Dashboard.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbardash from '../Navbar/Navbardash';
import Sidebar from '../sidebardash/sidebardash';
import Insights from '../Insights/Insights';
import Charts from '../charts/charts';
import Table from '../Table/Table';

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", email: "", phone: "", age: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const addStudent = () => {
    if (!newStudent.name || !newStudent.email || !newStudent.phone || !newStudent.age) {
      toast.error("Please fill all fields");
      return;
    }
    setStudents([...students, newStudent]);
    setNewStudent({ name: "", email: "", phone: "", age: "" });
    toggleModal();
    toast.success("Student added successfully!");
  };

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!isDarkMode);

  return (
    <div className={`container ${isDarkMode ? 'dark-theme-variables' : ''}`}>
      <div className="navbar">
        <Navbardash />
      </div>
      <div className='main-section'>
        <div className='main-sidebar'>
          <Sidebar onAddStudentClick={() => setIsModalOpen(true)} />
        </div>
        <div className='main-dash'>
          {/* <main> */}
          <div>
            <h1>School Management</h1>
          </div>
          <div>
            <Insights />
          </div>
          <div>
            <Charts />
          </div>
          <div>
            <Table students={students} />
          </div>
            <ToastContainer />
          {/* </main> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;