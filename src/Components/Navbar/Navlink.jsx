import {Compass, Github, Heart, House, LogIn, LogOut} from 'lucide-react'
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { changeSearchedUser, removeUser } from '../../redux store/userSlice';
import useLogout from '../../hooks/useLogout';

const Navlink = () => { 
  let handleLogout = useLogout();
  let dispatch = useDispatch();
  let searchedUser = useSelector((store) =>(store.user.searchedUser));
  let loggedInUser= useSelector((store)=>(store.user.loggedInUser))
  
  let handleSearchLoggedInUser = ()=>{
    if(!loggedInUser || searchedUser === loggedInUser?.username){return}
    dispatch(removeUser());
    
    dispatch(changeSearchedUser(login));

  }

 


  return (
    <div className='flex flex-col items-center justify-between h-full'>
      <div  className='relative flex flex-col items-center pt-3 gap-6 '>
        <Link onClick={handleSearchLoggedInUser} to={"/"}><Github /></Link>
        
        <Link to={"/explore"}><Compass /></Link>
        <Link to={"/notifications"}><Heart fill='white'/></Link>
        {!loggedInUser &&<Link to={"/auth"}> <LogIn /></Link>}
      </div>
      {loggedInUser &&<div className='flex flex-col items-center gap-5'>
      
      <div className=' w-[70%]'><img className='relative rounded-full h-full w-full object-cover' src={loggedInUser.avatarUrl} alt="" /></div>

      <Link onClick={handleLogout}> <LogOut /></Link>
      </div>}
    
      
     

      
      
      

    </div>
  )
}

export default Navlink