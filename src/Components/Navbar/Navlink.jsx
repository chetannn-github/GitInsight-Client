import {Compass, Github, Heart, House, LogOut} from 'lucide-react'
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import { changeSearchedUser, removeUser } from '../../redux store/userSlice';

const Navlink = () => {
  let dispatch = useDispatch();
  let handleSearchLoggedInUser = ()=>{
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