import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from './usercontext';

function Login() {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '', role: 'vigilante' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = loginUser(form.username, form.password, form.role);
    if (user) {
      alert(`Bienvenido ${user.username} (${user.role})`);
      if (user.role === 'administrador') navigate('/administrador');
      else if (user.role === 'empleado') navigate('/empleado');
      else navigate('/vigilante');
    } else {
      alert('Usuarios incorrectos o rol inválido');
    }
  };

  return (
    <div className="form-container">
      <h1>Iniciar Sesión</h1>
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
        <button type="submit">Ingresar</button>
      </form>
      <p className="register-link">
        ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
      </p>
    </div>
  );
}

export default Login;
