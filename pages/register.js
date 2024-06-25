import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/register', { username, password });
      setMessage('Registration successful!');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-6 text-green-600 text-center">Register</h1>
          <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8">
            <form className="w-full" onSubmit={handleSubmit} method="POST">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
              {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
              {message && <p className="text-green-500 text-xs italic mt-4">{message}</p>}
            </form>
            <p className="mt-4 text-center">
              Already have an account?{' '}
              <Link href="/login">
                <span className="text-green-600 hover:text-green-800 cursor-pointer">
                  Login here
                </span>
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
