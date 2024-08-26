import {useDispatch, useSelector} from "react-redux"
import { addUser } from "../reduxstore/userSlice";
import { BASE_URL } from "../utils/constants";
const useGetUserInfo = () => {
    let dispatch = useDispatch()
    
    let getUserInfo = async (username) =>{
        try {
            let response = await fetch(`${BASE_URL}/api/users/profile/${username}`);
            let usersAndRepos = await response.json();
            dispatch(addUser(usersAndRepos))
            console.log(usersAndRepos);


        } catch (error) {
            console.log("error in getting user info and repos" + error.message);
            
        }
    }
    return getUserInfo
}

export default useGetUserInfo