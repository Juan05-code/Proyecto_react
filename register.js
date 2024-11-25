import React, { useState, useContext } from 'react';
import { UserContext } from './usercontext';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { registerUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '', role: 'vigilante' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerUser(form)) {
      navigate('/login');
    }
  };

  return (
    <div className="form-container">
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input type="text" name="username" onChange={handleChange} required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>
        <div>
          <label>Rol:</label>
          <select name="role" value={form.role} onChange={handleChange} required>
            <option value="vigilante">Vigilante</option>
            <option value="administrador">Administrador</option>
            <option value="empleados">Empleado</option>
          </select>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
