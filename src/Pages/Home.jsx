import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Searchbar from '../Components/Searchbar/Searchbar'
import SortLinks from '../Components/SortLink/SortLinks'
import UserInfo from '../Components/UserInfo/UserInfo'
import useGetUserInfo from '../hooks/useGetUserInfo'
import { useSelector } from 'react-redux'

const Home = () => {
  let getUserInfo = useGetUserInfo();
  let searchedUser = useSelector((store) =>(store.user.searchedUser));

  useEffect(()=>{
    getUserInfo(searchedUser);
  },[searchedUser])

  return (
    <div id='home' className='flex relative h-[100vh] w-[100%] '>
      <Navbar/>
    

      <div className='relative px-20 flex flex-col ml-[60px] w-[calc(100%-60px)]'>
        <div className='fixed bg-black h-[140px] z-99 p-3 w-full flex flex-col pb-3 gap-3 items-center'>
          <Searchbar/>
          <SortLinks/>
        </div>
        <UserInfo/>
      </div>


    </div>
  )
}

export default Home