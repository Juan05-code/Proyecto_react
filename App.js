import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserProvider } from './usercontext.js';
import Login from './login';
import Register from './register';
import Home from './home.js';
import Vigilant from './vigilante.js';
import Admin from './administrador.js';
import Employee from './empleado.js';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/vigilant" element={<Vigilant />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/employee" element={<Employee />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
