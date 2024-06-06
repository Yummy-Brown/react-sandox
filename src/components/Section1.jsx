import React from 'react'
import { useState } from 'react';

const Section1 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
    }
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales faucibus eleifend ullamcorper in in neque sapien turpis est. Vulputate justo, orci ut tortor tincidunt morbi justo, aliquet dui. Integer blandit praesent odio leo. Nisl non mauris ipsum semper gravida."
    const {show, setShow} = useState(false);
    const toggleShow = () => {
        setShow(!show);
    }
  return (
    <div>
        {isLoggedIn ? <button onClick={login}>LOG IN</button> : <button onClick={logout}>LOG OUT</button>}
        {/* <p>{content.substring(0, 30)}</p> */}
        <p>{show ? content : `${content.substring(0, 50)}...`}</p>
        <button onClick={toggleShow}>{show ? "show less" : "Read more"}</button>

    </div>
  );
};

export default Section1;