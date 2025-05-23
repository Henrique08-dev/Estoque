//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Cadastro';
import Circuito from './components/Circuito';
//import Home from './components/Home';
//import Sobre from './components/Sobre';
//import Galeria from './components/Galeria';

const App = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleRegister = () => {
    setIsLogin(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAutheticated')
    localStorage.removeItem('token');
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isAuthenticated ? (
        <Circuito onLogout={handleLogout}/>
      ) : (
        <>
          {isLogin ? (
            <>
              <Login onLogin={handleLogin} />
              <p className='pCL'>
                Não tem uma conta?{' '}
                <button className='bCL2' onClick={toggleForm}>Cadastre-se</button>
              </p>
            </>
          ) : (
            <>
              <Register onRegister={handleRegister} />
              <p className='pCL'>
                Já tem uma conta?{' '}
                <button className='bCL2' onClick={toggleForm}>Faça login</button>
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;

