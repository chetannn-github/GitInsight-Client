import {Eye, File, FileHeart, Heart, MapPin, Twitter, User, UserCheck} from "lucide-react"

const Profile = () => {
  return (
    <div className="flex  flex-col fixed gap-5 w-[400px] px-3 -py-2 ">
      <div  className="flex gap-3 ">
        <div id="img" className="h-[100px] w-[100px]">
          <img src="./fav.png" className="relative h-full w-full" alt="" />
        </div>
        <div className="flex flex-col gap-1 justify-center"> 
          <div className="flex gap-2">
            <Heart fill="white"/>
            <button> Like Profile</button>
          </div>
          <div className="flex gap-2"> 
          <Eye />
          <button>View on Github</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div  className="flex gap-1">
          <MapPin />Jaipur, India
        </div>
        <div className="flex gap-1">
        <Twitter /> @csrtwt
        </div>
        <div className="flex flex-col  ">
          <p className="opacity-65  text-xs">member since</p>
          <p>Dec 02,2023</p>
        </div>
        <div className="flex flex-col -gap-1 ">
          <p className="opacity-65  text-sm">username</p>
          <p>chetannn-github</p>
         
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex  gap-3 ">
          <div className="flex gap-1">
          <UserCheck /> Followers 532
          </div>
          <div className="flex gap-1">
          <User /> Followings 321
          </div>
        </div>
  
        <div className="flex gap-3">
          <div className="flex gap-1">
          <File/> Public Repos 2
          </div>
          <div className="flex gap-1">
          <FileHeart />
           Public gists 2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile