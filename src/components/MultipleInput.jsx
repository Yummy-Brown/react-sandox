import React, { useState } from 'react'

const MultipleInput = () => {
    const [user, setUser] = useState({ firstName: '', lastName:'', email:'', username:'', });
    const [error, setError] = useState('');
    const handleChange = (e) => { 
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        if (!user.firstName || !user.lastName || !user.email || !user.username) {
            setError('Please fill all input fields');
        }
        setTimeout(() => {
            setError('');
        }, 3000);
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='w-50 bg-success mx-auto my-3 rounded-3 shadow-lg p-4'>
            <h1 className='fs-3 fw-light text-center text-white'>Register</h1>
            <small className='text-danger'>{error}</small>
            <input type="text" placeholder='First name' className='form-control my-2' value={user.firstName} name='firstName' onChange={handleChange} />
            <input type="text" placeholder='Last name' className='form-control my-2' value={user.lastNametName} name='lasttName' onChange={handleChange} />
            <input type="email" placeholder='Email Address' className='form-control my-2' value={user.email} name='email' onChange={handleChange} />
            <input type="text" placeholder='username' className='form-control my-2' value={user.username} name='username' onChange={handleChange} />
            <button type='submit' className='btn btn-primary my-2 w-25'>Submit</button>
        </form>
    </div>
  )
}

export default MultipleInput