import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { serverurl } from '../App';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const result = await axios.post(serverurl+'/user/register', { name, email, password },{withCredentials: true});
      setSuccess('Registration successful!');
      
      setTimeout(() => {
        navigate('/home');
      }, 1500);
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError('Registration failed. Please try again.');
      }
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url('/public/assets/img/others/Login_signup.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            filter: 'blur(8px)',
            zIndex: 1,
          }}
        />
        <form onSubmit={handleSubmit} style={{ zIndex: 2 }}>
          <section className="flex w-[30rem] flex-col px-10 space-y-10 border-2 border-slate-600 bg-slate-800/60 rounded-lg shadow-lg p-10">
            <div className="text-center text-4xl font-bold text-white font-5">Sign Up</div>

            {error && <div className="text-red-500 text-center">{error}</div>}
            {success && <div className="text-green-500 text-center">{success}</div>}

            <div className="w-full transform bg-white border-0 rounded-md duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-11 rounded-lg p-3 border-2 bg-transparent font-1 outline-none placeholder:italic focus:outline-2 focus:outline-blue-400 text-black hover:outline-green-400"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>

            <div className="w-full transform bg-white border-0 rounded-md text-md duration-300 focus-within:border-indigo-500">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-11 rounded-lg p-3 font-1 border-none bg-transparent outline-none placeholder:italic focus:outline-2 focus:outline-blue-400 text-black hover:outline-green-400"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>

            <div className="w-full transform bg-white text-md duration-300 border-0 rounded-md focus-within:border-indigo-500">
              <input
                type="password"
                placeholder="Password"
                className="w-full h-11 rounded-lg p-3 border-none bg-transparent outline-none placeholder:italic focus:outline-2 focus:outline-blue-400 text-black hover:outline-green-400"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                value={password}
                required
              />
            </div>

            <button
              className="transform rounded-lg h-11 p-3 text-md text-white bg-indigo-700 font-1 font-bold duration-300 hover:bg-indigo-400"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Signing up...' : 'SIGN UP'}
            </button>

            <p className="text-center text-lg font-1 text-white">
              Already Have an Account?{' '}
              <Link
                to="/login"
                className="font-medium text-indigo-400 underline-offset-4 hover:text-blue-400 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </section>
        </form>
      </div>
    </>
  );
};

export { Signup };
