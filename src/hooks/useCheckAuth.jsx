import { useDispatch } from "react-redux";
import { addLoggedInUser, changeSearchedUser } from "../redux store/userSlice";


const useCheckAuth = () => {
    let dispatch = useDispatch();

  let checkAuth = async() =>{
    let response = await fetch("http://localhost:5000/api/auth/check", { credentials: "include" });
    let {user} = await response.json();
    console.log(user);

    dispatch(addLoggedInUser(user));
    if(user)  dispatch(changeSearchedUser(user?.username))
    localStorage.setItem("authUser",JSON.stringify(user));
    console.log(user);
  }
  return checkAuth
}

export default useCheckAuth