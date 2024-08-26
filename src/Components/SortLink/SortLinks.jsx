import {useDispatch, useSelector} from "react-redux"
import { addSortRepo } from "../../redux store/userSlice";
const SortLinks = () => {
  let userInfo = useSelector((store)=>(store.user?.userInfo))
  let dispatch = useDispatch();

  let handleMost = (most)=>{
    if(!userInfo){return}

    //! thing  i learned that you can't directly modify redux stored data 
    
    let sortedRepo = [...userInfo.repos].sort((a,b) =>new Date(b[most]) - new Date(a[most]))
    dispatch(addSortRepo({...userInfo,repos:sortedRepo}));
    console.log("array sorted")
  }
  return (
    <div className='flex gap-3  '>
      <button type="button" className='border-[1px] rounded-xl border-opacity-20 px-4 py-2 'onClick={()=>(handleMost("created_at"))} >Most Recent</button>
      <button type="button" className='border-[1px] rounded-xl border-opacity-20 px-4 py-2'onClick={()=>(handleMost("forks_count"))}>Most Forks</button>
      <button type="button" className='border-[1px] rounded-xl border-opacity-20 px-4 py-2'onClick={()=>(handleMost("stargazers_count"))}>Most Stars</button>
    </div>
  )
}

export default SortLinks