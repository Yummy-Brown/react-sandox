import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <div className='links'>
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/login'>LOGIN</Link>
        <Link to='/tweet'>TIMELINE</Link>
    </div>
  )
}

export default Head