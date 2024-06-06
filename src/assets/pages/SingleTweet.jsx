import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { tweets } from '../../tweets';

const SingleTweet = () => {
    const { tweetId } = useParams();
    const [ tweet, setTweet] = useState({});

    useEffect(() => {
        const tweetToSee = tweets.find((tweet) => tweet.id === tweetId);
        setTweet(tweetToSee);
    }, [tweetId]);

  return ( 
    <div className='container animate__animated animate__backInLeft'>
        <h1>SingleTweet</h1>
        <Link to='/tweet' className='btn btn-primary'>Back to Timeline</Link>
        <h1> { tweetId } </h1>
        <div className=' card border-danger rounded-3 p-3 text-primary' style={{ width: '16rem'}}>
            <p> {tweet.post} </p>
            <p className='text-danger'> {tweet.likes} likes</p>
            <ul className='my-2'>
                {
                    tweet.comments && tweet.comments.map((comment, index) => {
                        return <li key={index}> {comment} </li>;
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default SingleTweet;