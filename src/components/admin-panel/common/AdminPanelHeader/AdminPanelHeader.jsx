import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanelHeader.css'; // CSS dosyanızın yolunu doğrulayın
import AdminPageLogoImg from "../../../../assets/hrteamlogo.png";

const AdminPanelHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Local storage'daki token'ı sil
    localStorage.removeItem('authToken');
    // Login sayfasına yönlendir
    navigate('/loginpage');
  };

  return (
    <header className="topbar">
      <div className="logo">
        <a href="/admin/dashboard"><img src={AdminPageLogoImg} alt="Admin Logo" /></a>
      </div>
      <div className="user-profile">
        <h2>Admin</h2>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminPanelHeader;
