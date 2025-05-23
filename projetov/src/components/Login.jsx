import { useState } from 'react';
import PropTypes from 'prop-types';
import './CL.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || 'Erro ao fazer login.');
        return;
      }

      const { token } = await response.json();
      localStorage.setItem('token', token);
      setError('');
      onLogin(); 
    } catch (error) {
      setError('Erro ao conectar com o servidor.');
    }
  };


  return (
    <div className='container'>
      <h2 className='hCL'>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form className='fCL' onSubmit={handleSubmit}>
        <div>
          <label className='lCL'>Digite seu email:</label>
          <input
            className='iCL'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='lCL'>Digite sua senha:</label>
          <input
            className='iCL'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='bCL' type="submit">Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
