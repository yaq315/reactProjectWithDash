import React, { useState } from 'react';
import './student.css';

function Student() {
  const [student, setStudent] = useState({
    name: 'John Doe',
    id: '123456',
    course: 'Full-Stack Development',
    progress: 75,
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    profilePic: 'https://via.placeholder.com/150'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  return (
    <div className="container">
      <aside>
        <div className="top">
          <div className="logo">
            <h2>Future <span className="highlight">Coders</span></h2>
          </div>
        </div>
        <div className="sidebar">
          <a href="#" className="active">
            <span className="material-symbols-sharp">dashboard</span>
            <h3>Dashboard</h3>
          </a>
          <a href="#">
            <span className="material-symbols-sharp">school</span>
            <h3>My Courses</h3>
          </a>
          <a href="#">
            <span className="material-symbols-sharp">assignment</span>
            <h3>Assignments</h3>
          </a>
          <a href="#">
            <span className="material-symbols-sharp">chat</span>
            <h3>Messages</h3>
          </a>
          <a href="#">
            <span className="material-symbols-sharp">settings</span>
            <h3>Settings</h3>
          </a>
          <a href="#">
            <span className="material-symbols-sharp">logout</span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>
      
      <main>
        <h1>Student Dashboard</h1>
        <div className="student-info">
          <img src={student.profilePic} alt="Profile" className="profile-pic" />
          <h2>Welcome, {student.name}</h2>
          <p><strong>Student ID:</strong> {student.id}</p>
          <p><strong>Enrolled Course:</strong> {student.course}</p>
          <p><strong>Progress:</strong> {student.progress}%</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${student.progress}%` }}></div>
          </div>
        </div>

        <div className="edit-info">
          <h2>Edit Profile</h2>
          <label>Email:</label>
          <input type="email" name="email" value={student.email} onChange={handleInputChange} />
          <label>Phone:</label>
          <input type="text" name="phone" value={student.phone} onChange={handleInputChange} />
          <label>Profile Picture URL:</label>
          <input type="text" name="profilePic" value={student.profilePic} onChange={handleInputChange} />
          <button className="save-btn">Save Changes</button>
        </div>

        <div className="notifications">
          <h2>Notifications</h2>
          <ul>
            <li>New assignment posted in {student.course}.</li>
            <li>Your instructor has sent you a message.</li>
            <li>Upcoming deadline for project submission.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Student;
