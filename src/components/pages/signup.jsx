import React, { useState } from "react";
import "./sign.css";
import { useNavigate } from "react-router-dom";
import logo from "../image/logo.png";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useTranslation } from 'react-i18next';

function Signup() {
   const { t, i18n } = useTranslation(); 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        return /^[a-zA-Z]+$/.test(value) ? "" : "First name should only contain letters.";
      case "lastName":
        return /^[a-zA-Z]+$/.test(value) ? "" : "Last name should only contain letters.";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Please enter a valid email address.";
      case "password":
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) ? "" : "Password must be at least 8 characters and contain both letters and numbers.";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate field
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      newErrors[field] = validateField(field, formData[field]);
    });

    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.values(newErrors).every((error) => error === "")) {
      console.log("Form submitted successfully!", formData);

      // Load existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Add new user to the array
      existingUsers.push(formData);

      // Save the updated users array back to localStorage
      localStorage.setItem("users", JSON.stringify(existingUsers));

      alert("Account created successfully!");

      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <section className="showcase">
        <div className="overlay">
          <article className="left-section">
            <img src={logo} alt="Logo" className="logo" />
            <p className="description">
              {t("logindes")}
            </p>
          </article>
          <article className="right-section">
            <form className="form" onSubmit={handleSubmit}>
              <h2>{t("Sign Up")}</h2>
              <div className="input-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder={t("First Name")}
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? "invalid" : "valid"}
                />
                {errors.firstName && <small className="error">{errors.firstName}</small>}
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder={t("Last Name")}
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? "invalid" : "valid"}
                />
                {errors.lastName && <small className="error">{errors.lastName}</small>}
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder={t("Email Address")}
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "invalid" : "valid"}
                />
                {errors.email && <small className="error">{errors.email}</small>}
              </div>

              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder={t("Password")}
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "invalid" : "valid"}
                />
                {errors.password && <small className="error">{errors.password}</small>}
              </div>

              <button type="submit">{t("Sign Up")}</button>
              <p className="login-link">{t("Already have an account?")}
                 <a href="/login">{t("Login")}</a>
              </p>
            </form>
          </article>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Signup;
