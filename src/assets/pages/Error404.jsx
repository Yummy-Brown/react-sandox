import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
      <h1>OOOppss</h1>
      <h2>Page not found</h2>
      <Link to='/'>BACK TO HOMEPAGE</Link>
    </div>
  )
}

export default Error404