import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Lista de usuarios registrados
  const [currentUser, setCurrentUser] = useState(null); // Usuario actualmente conectado

  // Registrar un nuevo usuario
  const registerUser = (user) => {
    const userExists = users.some((u) => u.username === user.username);
    if (userExists) {
      alert('El usuario ya existe. Elija un nombre diferente.');
      return false;
    }
    setUsers([...users, user]);
    alert('Usuario registrado con éxito.');
    return true;
  };

  // Iniciar sesión de un usuario
  const loginUser = (username, password, role) => {
    const user = users.find(
      (u) => u.username === username && u.password === password && u.role === role
    );
    if (user) {
      setCurrentUser(user);
      return user;
    } else {
      alert('Credenciales o rol incorrectos.');
      return null;
    }
  };

  return (
    <UserContext.Provider value={{ users, currentUser, registerUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
