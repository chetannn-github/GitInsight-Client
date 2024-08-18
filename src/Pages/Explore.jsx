
import Navbar from '../Components/Navbar/Navbar'
import ExploreHeader from '../Components/Explore/ExploreHeader'
import Repos from '../Components/UserInfo/Repos'

const Explore = () => {
  return (
    <div className='flex relative h-[100vh] w-[100%]'>
      <Navbar/>
      <div className='ml-[60px] w-[calc(100%-60px)]  flex flex-col items-center'>
        <ExploreHeader/>
        <Repos/>
      </div>
      </div>
  )
}

export default Explore