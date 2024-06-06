import React,  { useState, useEffect } from 'react'
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

const Dashboard = () => {
  const url = 'https://example-data.draftbit.com/teams?_limit=10';
  const [isLoading, setIsLoading] = useState(true);
  const [teams, setTeams] = useState([]);
  const getData = async () => {
    try {
      const {data} = await axios(url);
      setIsLoading(false);
      toast.success('Welcome to the Dashboard');
      setTeams(data);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message)
    }
  }
  useEffect(() => {
    getData();
  }, []);
  
  if (isLoading) {
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
  return (
    <div>
      <ToastContainer />
      <h1 className='text-primary animate__animated animate__bounce'>Welcome User</h1>
      <div className='my-2 text-warning animate__animated animate__backInLeft'>
        {
          teams.map((team) => {
            return <p key={team.id}>{team.name}</p>
          })
        }

      </div>
    </div>
  )
}

export default Dashboard