import {Search} from "lucide-react"
import { useRef } from "react"
import { useDispatch } from "react-redux";
import { changeSearchedUser, removeUser } from "../../redux store/userSlice";

const Searchbar = () => {
  let inputRef= useRef(null);
  let dispatch = useDispatch();

  let handleSearchUser = () => {
    dispatch(removeUser());
    dispatch(changeSearchedUser(inputRef.current.value.trim()));
    
  }
  return (
    <div className="flex items-center gap-1 border-2  border-black  bg-slate-930 px-3 py-2">
      <Search />
      <input type='text' ref={inputRef} className='bg-inherit outline-none px-3 py-1 ' placeholder='enter username'></input>
      <button type="button " className="ml-2 px-5 py-1 " onClick={handleSearchUser} >search</button>
    </div>
  )
}

export default Searchbar