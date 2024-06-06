import React from 'react'

const Employee = ({name, role, salary, content, children}) => { 
  return (
    <div className='employee'> 
        <h2>{name}</h2>
        <h3>{role}</h3>
        <h3>{salary}</h3>
        <p>{content}</p>
        {children}
    </div>
  );
};

export default Employee;