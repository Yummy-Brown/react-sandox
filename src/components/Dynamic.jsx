import React from 'react'
import skyscraper from "../assets/image2.jpg"
import conference from "../assets/image4.jpg"


const Dynamic = () => {
    const myName = "John Doe";
    let age = 67;
  return (
    <div>
        <h1>{1 + 1}</h1>
        <p>
            My name is {myName} and i am {age} years old
        </p>
        <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="image" className='image' />
        <img src={skyscraper} alt="skyscraper" className='image2' />
        <img src={conference} alt="conference" className='image4' />
    </div>
  );
};

export default Dynamic;