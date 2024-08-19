import Profile from "./Profile"
import Repos from "./Repos"


const UserInfo = () => {
  return (
    <div className="flex  mt-[140px]">
        <Profile/>
        <div className="ml-[400px] flex  pl-10  w-[calc(100%-400px)] "> 
          <Repos/>
        </div>
       
    </div>
  )
}

export default UserInfo