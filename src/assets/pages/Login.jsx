import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const redirect = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if (!username || !password) {
            //setError('Please provide username and password');
            toast.error('Please fill all inputs field')
        } else {
            redirect('/dashboard');
        }
    }

  return (
    <div>
        <ToastContainer />
        <form onSubmit={handleLogin} className='bg-warning w-50 rounded-2 p-3'>
            <h2 className='display-6 text-white'>Login</h2>
            <input type="text" placeholder='username' className='form-control my-2' value={username}  onChange={(e) => setUsername(e.target.value)}  />
            <input type="password" placeholder='Password' className='form-control my-2'  value={password}  onChange={(e) => setPassword(e.target.value)}  />
            <button className='btn btn-primary text-white my-3'>Log In</button>
        </form>
    </div>
  )
}

export default Login