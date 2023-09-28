import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/SideBar/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Available from './pages/Available.jsx';
import Invoices from './pages/Invoices.jsx';
import Comment from './pages/Comment.jsx';
import Projects from './pages/Projects.jsx';
import Socialmedia from './pages/Socialmedia.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";     
import 'primeicons/primeicons.css';
        
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/available" element={<Available />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Socialmedia" element={<Socialmedia />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;