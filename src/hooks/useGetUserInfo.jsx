import {useDispatch} from "react-redux"
import { addUser } from "../redux store/userSlice";
const useGetUserInfo = () => {
    let dispatch = useDispatch()
    let getUserInfo = async (username) =>{
        try {
            let response = await fetch(`http://localhost:5000/api/users/profile/${username}`);
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