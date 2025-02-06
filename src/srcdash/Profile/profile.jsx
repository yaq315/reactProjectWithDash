import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useTranslation } from 'react-i18next';

function Profile() {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // استرجاع بيانات المستخدم المسجل من localStorage
    const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
    if (!loggedInUserEmail) {
      // إذا لم يكن هناك مستخدم مسجل، يتم توجيهه إلى صفحة تسجيل الدخول
      navigate("/login");
      return;
    }

    // استرجاع جميع المستخدمين من localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = users.find(user => user.email === loggedInUserEmail);

    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      // إذا لم يتم العثور على المستخدم، يتم توجيهه إلى صفحة تسجيل الدخول
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    // حذف بيانات المستخدم المسجل من localStorage
    localStorage.removeItem("loggedInUserEmail");
    navigate("/login");
  };

  if (!user) {
    return <div>Loading...</div>; // أو يمكنك عرض رسالة تحميل
  }

  return (
    <div>
      <Navbar />
      <section className="showcase">
        <div className="overlay">
          <article className="profile-section">
            <h2>{t("User Profile")}</h2>
            <div className="profile-info">
              <p><strong>{t("First Name")}:</strong> {user.firstName}</p>
              <p><strong>{t("Last Name")}:</strong> {user.lastName}</p>
              <p><strong>{t("Email Address")}:</strong> {user.email}</p>
            </div>
            <button onClick={handleLogout}>{t("Logout")}</button>
          </article>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;