import React, { useEffect, useRef } from 'react'

const SimpleRef = () => {
    const refContainer = useRef();
    useEffect (() => {
      refContainer.current.focus();
    }, []);
  return (
    <div>
        <form className='bg-warning p-4 w-50 rounded-2 mx-auto my-3'>
            <label htmlFor="search" className='form-label text-white'>Search</label>
            <input ref={refContainer} type="text" id='search' placeholder='Search for users' className='form-control' />
            <button className='btn btn-primary my-3'>Search</button>
        </form> 
    </div>
  )
}

export default SimpleRef