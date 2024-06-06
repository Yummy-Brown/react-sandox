import React from 'react'
import { useState } from 'react';

const SimpleState = () => {
    const [title, setTitle] = useState('Hello World');
    const changeTitle = () => {
        setTitle('Random Title');
    };
    const [num, setNum] = useState(0);
    const increaseNum = () => {
        setNum(num + 1);
    };
    const decreaseNum = () => {
        setNum(num - 1);
    };
    const resetNum = () => {
        setNum(0);
    };
  return (
    <div>
        <h1>State Management</h1>
        <p>{title}</p>
        <button onClick = {changeTitle}>Change Title</button>
        <h1>{num}</h1>
        <button onClick={increaseNum}>Increase</button>
        <button onClick={resetNum}>Reset</button>
        <button onClick={decreaseNum}>Decrease</button>

    </div>
  );
};

export default SimpleState;