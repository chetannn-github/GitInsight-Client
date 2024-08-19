import { useSelector } from "react-redux";
import Profile from "./Profile"
import Repos from "./Repos"


const UserInfo = () => {
  let userInfo= useSelector((store)=>(store.user));
  
  if(!userInfo){return  (<div className="flex  mt-[140px]">loading.......</div>)}

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