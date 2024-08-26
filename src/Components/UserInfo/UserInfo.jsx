import { useSelector } from "react-redux";
import Profile from "./Profile"
import Repos from "./Repos"
import Spinner from "../Spinner";
import toast from "react-hot-toast";


const UserInfo = () => {
  let userInfo= useSelector((store)=>(store.user.userInfo));

  
  if(!userInfo){return  (<div className="flex  mt-[140px]"><Spinner/></div>)}

  if(userInfo.error){
    toast.error("please enter correct username",{position:"bottom-center"});
    return
  }

  return (
    <div className="flex flex-col relative  w-full h-fit z-10  mt-[140px] ">
        <Profile userInfo={userInfo.userProfile}/>
        <div className="md:ml-[400px] flex  md:pl-10  md:w-[calc(100%-400px)]  "> 
          <Repos repos={userInfo.repos} />
        </div>
       
    </div>
  )
}

export default UserInfo