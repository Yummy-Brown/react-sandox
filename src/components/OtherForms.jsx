import React, { useState } from 'react'

const OtherForms = () => {
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [agree, setAgree] = useState(false)
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(title, address, agree);
        setTitle('');
        setAddress('');
        setAgree('');
    };
    
    
  return (
    <div>
        <form onSubmit={handleFormSubmit} className='w-50 border border-2 rounded-2 mx-auto  my-3 p-5 bg-success'>
        <select value={title} onChange={(e) => setTitle(e.target.value)} className='form-select' name="" id="">
        <option value="">Open this Menu</option>
        <option value="mr">Mr</option>
        <option value="mrs">Mrs</option> 
        <option value="miss">Miss</option>
        </select>
            <label htmlFor="address" className='form-label my-4'>Address</label>
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} name="" id="address" className='form-control '></textarea>
            <input checked={agree} onChange={(e) => setAgree(e.target.value)} type="checkbox" id='agree' className='form-check-input' />
            <label htmlFor="agree" className='form-check-label'>*Agree to Terms and condition</label>
            <button type='submit' className='btn btn-primary fs-6 d-block my-3'>Submit</button>
        </form>
    </div>
  )
}

export default OtherForms