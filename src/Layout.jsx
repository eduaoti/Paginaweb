// src/Layout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <header style={{
        padding: '20px',
        backgroundColor: '#111',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid #333',
        boxShadow: '0 2px 10px rgba(255,255,255,0.05)',
      }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Mi Sitio Web</h1>
        <nav>
          <Link to="/" style={linkStyle}>Inicio</Link>
          <Link to="/about" style={linkStyle}>Acerca de</Link>
        </nav>
      </header>

      <main style={{
        padding: '40px 30px',
        backgroundColor: '#000',
        minHeight: '80vh',
        animation: 'fadeIn 1s ease-in-out'
      }}>
        <Outlet />
      </main>

      <footer style={{
        padding: '20px',
        backgroundColor: '#111',
        color: '#aaa',
        textAlign: 'center',
        borderTop: '1px solid #333'
      }}>
        <p>Derechos Reservados © 2025 - Eduardo González Ortiz</p>
      </footer>
    </div>
  );
};

const linkStyle = {
  color: '#fff',
  margin: '0 15px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
  transition: 'color 0.3s ease',
};

export default Layout;
