import React, { createContext, useState, useContext } from 'react';

// Cria o contexto
const AuthContext = createContext();

// Cria o provider
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsLogged(true);
    setUser(userData);  // Salva os dados do usuário (ex: { id: '123', name: 'John' })
  };

  const logout = () => {
    setIsLogged(false);
    setUser(null);  // Limpa os dados do usuário ao sair
  };

  return (
    <AuthContext.Provider value={{ isLogged, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
