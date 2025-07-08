// File: src/Login.jsx
import './login.css';
import { useState } from 'react';
import backgroundVideo from './assets/background.mp4';

function onLogin() {
  setLoggedIn(true);
}

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(); // simulate login
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="login-container">
       
      <video autoPlay muted loop className="bg-video">
        <source src={backgroundVideo} type="video/mp4" />

        Your browser does not support the video tag.
      </video>
      
      <h2 id='hed'>Login to Change Detection Dashboard</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
