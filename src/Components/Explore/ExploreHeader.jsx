import React from 'react'

const ExploreHeader = () => {
  return (
    <div className='flex fixed h-[150px] flex-col items-center w-1/2 py-7 gap-3 bg-black'>
        <div>Popular Repositories</div>
        <div className='flex gap-7  bg-black '>
            <img src="./javascript.svg" alt="" />
            <img src="./c++.svg" alt="" />
            <img src="./go.svg" alt="" />
            <img src="./java.svg" alt="" />
          </div>
        
        
    </div>
  )
}

export default ExploreHeader