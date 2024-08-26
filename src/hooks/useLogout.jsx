import {toast} from "react-hot-toast"
import { useDispatch } from "react-redux";
import { addLoggedInUser, changeSearchedUser } from "../reduxstore/userSlice";
import { BASE_URL } from "../utils/constants";
const useLogout = () => {   
    let dispatch = useDispatch();
    let handleLogout = async() =>{
        try {
            let response = await fetch(`${BASE_URL}/api/auth/logout`,{
                credential:'include'
            });
            let result = await response.json();
            toast.success("LOGOUT HO GYA  BRO!!!!!!!!!");

            console.log(result);

            localStorage.removeItem("authUser");
            dispatch(addLoggedInUser(null))
            dispatch(changeSearchedUser("git"))

        } catch (error) {
            toast.error(error.message)
        }
       
        
    }
  return handleLogout
}

export default useLogout