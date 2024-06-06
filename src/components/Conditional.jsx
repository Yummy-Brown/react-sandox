import React from 'react'
import { useState } from 'react';

const Conditional = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [show, setShow] = useState(true);

    if  (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (isError) {
        return <h1>Error Ocurred while fetching data...</h1>;
    }
    return (
        <div>
            <h1>Main Data</h1>
            {show && <h1>SHOW ME</h1>}
            <button>{show ? "Log In" : "Log Out"}</button>
        </div>
  );
};

export default Conditional;