import Profile from "./Profile"
import Repos from "./Repos"


const UserInfo = () => {
  return (
    <div className="flex  mt-[140px]">
        <Profile/>
        <Repos/>
    </div>
  )
}

export default UserInfo