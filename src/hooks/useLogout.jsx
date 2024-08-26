import {toast} from "react-hot-toast"
import { useDispatch } from "react-redux";
import { addLoggedInUser, changeSearchedUser } from "../redux store/userSlice";
const useLogout = () => {   
    let dispatch = useDispatch();
    let handleLogout = async() =>{
        try {
            let response = await fetch("http://localhost:5000/api/auth/logout",{
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