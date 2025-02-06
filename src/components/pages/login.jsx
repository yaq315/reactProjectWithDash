import React, { useState } from "react";
import logo from "../image/logo.png";
import { useNavigate } from "react-router-dom";
import  Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer";
import { useTranslation } from 'react-i18next';

function Login() {
  
    const { t, i18n } = useTranslation(); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

 const navigate = useNavigate();


  const validateField = (name, value) => {
    switch (name) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Please enter a valid email address.";
      case "password":
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
          ? ""
          : "Password must be at least 8 characters and contain both letters and numbers.";
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

      navigate("/signup");
    });

    setErrors(newErrors);

   


    if (Object.values(newErrors).every((error) => error === "")) {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        alert("Login successful!");
      } else {
        alert("Invalid email or password.");
      }
      navigate("/Aboutpage")
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
              <h2>{t("Login")}</h2>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "invalid" : "valid"}
                  required
                />
                {errors.email && <small className="error">{errors.email}</small>}
              </div>

              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "invalid" : "valid"}
                  required
                />
                {errors.password && <small className="error">{errors.password}</small>}
              </div>

              <button type="submit">{t("Login")}</button>
              <p className="login-link">{t("Loginqus")} 
               <a href="/signup"> {t("Sign Up")}</a>
              </p>
            </form>
          </article>
        </div>
      </section>
     < Footer />
    </div>
  );
}

export default Login;