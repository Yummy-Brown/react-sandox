import React , { useEffect, useState } from 'react';

const SimpleEffect = () => {
    const [num, setNum] = useState(1);
    const [age, setAge] = useState(60);
    useEffect(() => {
        console.log('useEffect ran')
    }, [num, age]);
  return (
    <div>
        <h1> {num} </h1>
        <button onClick={() => setNum(num + 1)}>Change Num</button>
        <h1> {age} </h1>
        <button onClick={() => setAge(age + 1)}>Change Age</button>
    </div>
  )
}

export default SimpleEffect