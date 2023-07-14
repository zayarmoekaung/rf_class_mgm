'use client'
import { useState } from 'react';
import { useRouter } from 'next/router';
//import Layout from '../components/Layout';
import passport from '../../utils/auth';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await new Promise((resolve, reject) => {
        passport.authenticate('local', (err, user) => {
          if (err || !user) {
            setError('Invalid email or password');
            reject();
          } else {
            resolve();
          }
        })({ body: { email, password } });
      });

      router.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
  
      <main>
        <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Log in</button>
      </form>
      </main>
    
  );
}
