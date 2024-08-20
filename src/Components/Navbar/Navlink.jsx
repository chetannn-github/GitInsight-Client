import {Compass, Github, Heart, House, LogOut} from 'lucide-react'
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { changeSearchedUser, removeUser } from '../../redux store/userSlice';

const Navlink = () => {
  let dispatch = useDispatch();
  let searchedUser = useSelector((store) =>(store.user.searchedUser));
  
  let handleSearchLoggedInUser = ()=>{
    if(searchedUser ==="chetannn-github"){return}
    dispatch(removeUser());
    
    dispatch(changeSearchedUser("chetannn-github"));

  }
  return (
    <div  className='relative flex flex-col items-center pt-3 gap-6 '>
      <Link onClick={handleSearchLoggedInUser} to={"/"}><Github /></Link>
      
      <Link to={"/explore"}><Compass /></Link>
      <Link to={"/notifications"}><Heart fill='white'/></Link>
      <Link> <LogOut /></Link>
      
      
     

      
      
      

    </div>
  )
}

export default Navlink