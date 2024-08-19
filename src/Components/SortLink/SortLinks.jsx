import React from 'react'

const SortLinks = () => {
  return (
    <div className='flex gap-3  '>
      <button type="button" className='border-[1px] rounded-xl border-opacity-20 px-4 py-2'>Most Recent</button>
      <button type="button" className='border-[1px] rounded-xl border-opacity-5 px-4 py-1'>Most Forks</button>
      <button type="button" className='border-[1px] rounded-xl border-opacity-90 px-4 py-2'>Most Stars</button>
    </div>
  )
}

export default SortLinks