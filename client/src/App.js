import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserNavbar from './User/Usernavbar.jsx';
import DesignerNavbar from "./designer/Designernavbar.jsx";
import AdminNavbar from "./admin/adminnavbar.jsx";
import Login from './components/login.jsx';
import Register from "./components/Register";
import UserHome from './User/Userhome.jsx';
import Usermain from './User/Usermain.jsx';
import UserOrders from './User/Userorders.jsx';
import DesignerHome from './designer/designerhome.jsx';
import DesignerOrder from './designer/Designerorders.jsx';
import ProfilePage from './components/profilepage.jsx';
import AdminDashboard from './admin/admindashboard.jsx';
import Userproductview from './User/Userproductview.jsx';
import Addingproductlistsdropdown from './designer/Addingproductcategories.jsx';

function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedUserRole = sessionStorage.getItem('userRole');
    
    if (storedUserRole) {
      setUserRole(storedUserRole === "111" ? "admin" :
        storedUserRole === "110" ? "designer" :
        storedUserRole === "100" ? "user" :
        null
      );
    }
  }, []);

  const handleLogin = (userData) => {
    const role = userData.user_type === 111 ? 'admin' :
                 userData.user_type === 110 ? 'designer' :
                 userData.user_type === 100 ? 'user' :
                 null;

    setUserRole(role);
    sessionStorage.setItem("userRole", userData.user_type);
    localStorage.setItem("data", JSON.stringify(userData));
    console.log("data",userData);
    
  };

  const handleLogout = () => {
    setUserRole(null);
    sessionStorage.removeItem("userRole");
    // localStorage.removeItem("data"); // Optionally remove stored data
  };

  return (
    <Router>
      {userRole === 'admin' && <AdminNavbar onLogout={handleLogout} />}
      {userRole === 'user' && <UserNavbar onLogout={handleLogout} />}
      {userRole === 'designer' && <DesignerNavbar onLogout={handleLogout} />}

      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />

        {userRole === "admin" && (
          <>
            <Route path="/admindashboard" element={<AdminDashboard />} />
          </>
        )}

        {userRole === "designer" && (
          <>
            <Route path="/designerhome" element={<DesignerHome />} />
            <Route path="/designerorder" element={<DesignerOrder />} />
            <Route path="/addproductcategories" element={<Addingproductlistsdropdown />} />
          </>
        )}

        {userRole === "user" && (
          <>
            <Route path="/userhome" element={<UserHome />} />
            <Route path="/usermain" element={<Usermain />} />
            <Route path="/userproductview" element={<Userproductview />} />
            <Route path="/userorders" element={<UserOrders />} />
          </>
        )}

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
