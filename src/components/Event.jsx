import React from 'react'

const Event = () => {
    const handleClick = () => {}

    const handleClickAgain = (name) => {}
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <button onClick={() => handleClickAgain("john")}>Click Again</button>
    </div>
  );
};

export default Event;