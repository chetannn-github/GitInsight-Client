import {Search} from "lucide-react"
import { useRef } from "react"
import { useDispatch } from "react-redux";
import { changeSearchedUser, removeUser } from "../../reduxstore/userSlice";

const Searchbar = () => {
  let inputRef= useRef(null);
  let dispatch = useDispatch();

  let handleSearchUser = () => {
    dispatch(removeUser());
    dispatch(changeSearchedUser(inputRef.current.value.trim()));
    
  }
  return (
    <div className="flex items-center justify-between gap-1 border-2 w-full border-black   px-3 py-2">
      <Search />
      <input type='text' ref={inputRef} className='bg-inherit outline-none px-3 py-1 w-5/6' placeholder='enter username'></input>
      <button type="button " className="px-5 py-1 " onClick={handleSearchUser} >search</button>
    </div>
  )
}

export default Searchbar