import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import useAuth from '../hooks/useAuth'

const Auth = () => {
  let handleAuth = useAuth();
  return (
    <div className='flex relative h-[100vh] w-[100%]'>
      <Navbar/>
      <div className='ml-[60px] text-red-500' onClick={()=>(handleAuth())}>Login/Signup with github!!!!</div>
      </div>
  )
}

export default Auth