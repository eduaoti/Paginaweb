import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import './App.css';

// Página principal
function Home() {
  return (
    <div className="container">
      <h1 className="title">Página de Edu</h1>
      <h2 className="subtitle">Eduardo González Ortiz</h2>
<<<<<<< HEAD
      <h2 className="subtitle">Me encantan los perros</h2>
=======
      <h2 className="subtitle">ME gustan los perros</h2>
      <h1 className="subtitle">Más no los gatos</h1>
>>>>>>> f597df01a356794b20d2e8e0edfe4ded79f4f984
    </div>
  );
}

// Página secundaria
function About() {
  return (
    <div className="container">
      <h1 className="title">Acerca de Nosotros</h1>
      <p className="subtitle">Esta es una aplicación de prueba con React Router, diseñada por Eduardo.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/Paginaweb">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
