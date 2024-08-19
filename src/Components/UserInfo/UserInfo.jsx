import { useSelector } from "react-redux";
import Profile from "./Profile"
import Repos from "./Repos"
import Spinner from "../Spinner";


const UserInfo = () => {
  let userInfo= useSelector((store)=>(store.user.userInfo));
  
  if(!userInfo){return  (<div className="flex  mt-[140px]"><Spinner/></div>)}

  return (
    <div className="flex  mt-[140px]">
        <Profile userInfo={userInfo.userProfile}/>
        <div className="ml-[400px] flex  pl-10  w-[calc(100%-400px)] "> 
          <Repos repos={userInfo.repos} />
        </div>
       
    </div>
  )
}

export default UserInfo