import React, { createContext, useState, useContext } from 'react';

// Crie o contexto
const AuthContext = createContext();

// Crie o provider
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => setIsLogged(true);
  const logout = () => setIsLogged(false);

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
