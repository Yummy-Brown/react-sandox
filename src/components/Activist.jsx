import React, { useState, useEffect } from 'react';
import '../styles/Activist.css';
import { RotatingLines } from 'react-loader-spinner';

const Activist = () => {
    const [activist, setActivist] = useState ([])
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);
    const url = 'https://example-data.draftbit.com/activists?_limit=10';
    const getData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setisLoading(false);
            setActivist(data);
        } catch (error) {
            console.log(error);
            setisLoading(false);
            setisError(true);
        }
       
    };
    useEffect (() => {
        getData();
    }, []);
    if (isLoading) {
        return (
               <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />);
    }
    if (isError) {
        return <h1>Failed to Fetch</h1>
    }
  return (
    <div>
        <h1>LIST OF Activist</h1>
        <div>
            {
                activist.map((active) => {
                    const { id, person, imgUrl, description, articleUrl } = active;
                    return (
                        <div key = {id} className='ar'>
                            <h2>{person}</h2>
                            <img src={imgUrl} alt="imgUrl"  />
                            <p>${description}</p>
                            <a href={articleUrl} target=''> article link </a>
                            </div>
                    );
                })};
        </div>
    </div>
  )
}

export default Activist;