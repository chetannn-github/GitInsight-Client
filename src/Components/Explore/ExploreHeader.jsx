import React from 'react'

const ExploreHeader = () => {
  return (
    <div className='flex flex-col w-1/2 bg-black'>
        <div>
            Popular Repositories</div>
            <div className='flex gap-3  bg-black '>
                <img src="./javascript.svg" alt="" />
        <img src="./c++.svg" alt="" />
        <img src="./go.svg" alt="" />
        <img src="./java.svg" alt="" />
            </div>
        
        
    </div>
  )
}

export default ExploreHeader