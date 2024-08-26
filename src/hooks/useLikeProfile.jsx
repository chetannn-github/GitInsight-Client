import {toast} from "react-hot-toast"
import { BASE_URL } from "../utils/constants";

const useLikeProfile = () => {
    let likeProfile =async (username) =>{
        try {
            let response = await fetch(`${BASE_URL}/api/users/likes/${username}`,{
                method:"post",
                credentials:'include',
            }, 
        );
            let result = await response.json();

            // console.log(result);

            if(result.message){toast.success(result.message);}
            else {toast.error(result.error);}
            

        } catch (error) {
            toast.error(error.message)
        }
        
    }
    return likeProfile
}

export default useLikeProfile