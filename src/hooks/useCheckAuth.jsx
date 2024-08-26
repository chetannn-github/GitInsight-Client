import { useDispatch } from "react-redux";
import { addLoggedInUser, changeSearchedUser } from "../reduxstore/userSlice";
import { BASE_URL } from "../utils/constants";


const useCheckAuth = () => {
    let dispatch = useDispatch();

  let checkAuth = async() =>{
    let response = await fetch(`${BASE_URL}/api/auth/check`, { credentials: "include" });
    let {user} = await response.json();
    // console.log(user);

    dispatch(addLoggedInUser(user));
    if(user)  dispatch(changeSearchedUser(user?.username))
    localStorage.setItem("authUser",JSON.stringify(user));
    // console.log(user);
  }
  return checkAuth
}

export default useCheckAuth