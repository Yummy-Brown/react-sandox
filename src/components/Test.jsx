import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { RotatingLines } from 'react-loader-spinner';
import '../styles/Test.css';

const Test = () => {
        const url = 'https://example-data.draftbit.com/cars?_limit=10'
         const { isloading, isError, data: cars } = useFetch(url);

   
    if (isloading) {
        return  (
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
        return <h1>Error occured...</h1>
    }
  return (
    <div>
        <h1 className='text-primary list'>LIST OF CARS </h1>
        {
            cars.map((car) => {
                const { id, image, make_id, model, year, color } = car;
                return (
                    <div key={id} className='car'>
                        <h1>{make_id}</h1>
                        <p>{model}</p>
                        <p>{year}</p>
                        <p>{color}</p>
                        <img src={image} alt="" className='car-img' />
                        
                    </div>
                );
            })};
    </div>
  )
}

export default Test