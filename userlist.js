import React, { useContext } from 'react';
import { UserContext } from './usercontext.js';

function UserList() {
  const { users } = useContext(UserContext);

  return (
    <div className="form-container">
      <h1>Lista de Usuarios</h1>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div className="role-display" key={index}>
            <p>Usuario: {user.username}</p>
            <p>Rol: {user.role}</p>
          </div>
        ))
      ) : (
        <p>No hay usuarios registrados.</p>
      )}
    </div>
  );
}

export default UserList;
