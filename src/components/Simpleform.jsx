import React, { useState } from 'react'
// import { AppContext } from '../Context';
import { useAllContext } from '../Context';


const Simpleform = () => {
    const { age, myName} = useAllContext();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(name, email);
        if (!name, !email) {
            console.log('Please fill all fields')
        } else {
            console.log('Welcome User');
        }
        setName('');
        setEmail(''); 
    };
  return (
    <div>
        <form onSubmit={handleSubmit} className='w-50 border border-2 rounded-2 mx-auto  my-3 p-5 bg-success'>
            <h2 className='text-white'> Welcome  {myName} </h2>
            <label htmlFor="name" className='form-label'>Fullname</label>
            <input type="text" id='name' placeholder='full name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="name"  className='form-label my-3'>Email Address</label>
            <input type="text" id='name' placeholder='email address' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type='submit' className='btn btn-primary my-2'>Submit</button>
            
        </form>
    </div>
  )
}

export default Simpleform