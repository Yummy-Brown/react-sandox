import React from 'react'
import { tweets } from '../../tweets';
import { Link } from 'react-router-dom';
const Tweet = () => {
  return (
    <div className='animate__animated animate__backInLeft'>
        <h2 className='text-primary text-center'>Timeline</h2>
        {tweets.map((tweet) => {
            const { id, post, likes } = tweet;
            return (
                <Link to={`/single/${id}`} key={id} className='text-decoration-none'>
                <div key={id} className='card border-danger my-3 mx-auto rounded-3 p-4 text-primary ' style={{width: '14rem'}}>
                    <p className='fs-5'> {post} </p>
                    <p>{likes} likes</p>
                </div>
                </Link>
            )
        })}
    </div>
  )
}

export default Tweet