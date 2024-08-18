import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Searchbar from '../Components/Searchbar/Searchbar'
import SortLinks from '../Components/SortLink/SortLinks'
import UserInfo from '../Components/UserInfo/UserInfo'

const Home = () => {
  return (
    <div id='home' className='flex relative h-[100vh] '>
      <Navbar/>
    

      <div className='flex flex-col'>
        <Searchbar/>
        <SortLinks/>
        <UserInfo/>
      </div>


    </div>
  )
}

export default Home