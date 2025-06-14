// src/Layout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{
        padding: '20px',
        backgroundColor: '#ff5733',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1>Mi Sitio Web</h1>
        <nav>
          <Link to="/" style={linkStyle}>Inicio</Link>
          <Link to="/about" style={linkStyle}>Acerca de</Link>
        </nav>
      </header>

      <main style={{ padding: '30px', backgroundColor: '#fffbe6', minHeight: '80vh' }}>
        <Outlet />
      </main>

      <footer style={{
        padding: '15px',
        backgroundColor: '#ff5733',
        color: '#fff',
        textAlign: 'center'
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
  fontWeight: 'bold'
};

export default Layout;
