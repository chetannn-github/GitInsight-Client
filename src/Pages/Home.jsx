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
    <div id='home' className=' relative container '>
      <Navbar/>
    

      <div className='relative   flex flex-col ml-[60px] w-[calc(100%-60px)] '>

          <div id='nav-wrapper' className='fixed  h-[140px] z-50 bg-black w-[calc(100%-60px)]  flex justify-center p-2'>
            <div className=' w-[100%] md:w-[60%] lg:w-[40%] flex flex-col bg-inherit pb-3 gap-3  '>
              <Searchbar/>
              <SortLinks/>
            </div>
          </div>

        <UserInfo/>
      </div>


    </div>
  )
}

export default Home