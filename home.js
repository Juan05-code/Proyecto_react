import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="form-container">
      <h1>Bienvenido a Nuestra Empresa</h1>
      <p>Tu plataforma de gestión profesional.</p>
      <Link to="/login" className="btn-link">Iniciar Sesión</Link>
    </div>
  );
}

export default Home;
