
import Navbar from '../Components/Navbar/Navbar'
import ExploreHeader from '../Components/Explore/ExploreHeader'
import Repos from '../Components/UserInfo/Repos'
import useExplore from '../hooks/useExplore';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Spinner from '../Components/Spinner';


const Explore = () => {
  let getPopularRepos = useExplore();
   let exploreRepos = useSelector((store)=>(store.explore.repos));
  //  console.log(exploreRepos)
 let selectedLanguage = useSelector((store)=>(store.explore.selectedLanguage));

  useEffect(()=>{
    getPopularRepos (selectedLanguage);
  },[selectedLanguage])
  
  

  return (
    <div className='flex relative h-[100vh] w-[100%]'>
      <Navbar/>
      <div className='ml-[60px] w-[calc(100%-60px)]  flex flex-col items-center '>
        <ExploreHeader/>
        {!exploreRepos && (<div className='w-1/2 mt-[160px] relative flex justify-center'><Spinner/></div>)}
        {exploreRepos &&(<div className='w-1/2 mt-[140px]' ><Repos repos={exploreRepos.repos}/></div>)}
       
      </div>
      </div>
  )
}

export default Explore