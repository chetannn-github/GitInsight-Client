import {Eye, File, FileHeart, Heart,  MapPin, Twitter, User, UserCheck} from "lucide-react"
import {Link} from "react-router-dom"
import { convertDate } from "../../utils/dateConvertor";
import useLikeProfile from "../../hooks/useLikeProfile";
const Profile = ({userInfo}) => {
  
  let {login,avatar_url,url,location,twitter_username, followers,following,public_repos,public_gists,created_at} = userInfo;
  created_at = convertDate(created_at);

  let likeProfile = useLikeProfile();


  return (
    <div className=" relative md:fixed flex  flex-col  gap-5 h-[65vh] w-full  md:w-[400px] px-3 -py-2 ">
      <div  className="flex gap-3 ">
        <div id="img" className="h-[100px] w-[100px]">
          <img src={avatar_url} className="relative h-full w-full rounded-full" alt="" />
        </div>
        <div className="flex flex-col gap-1 justify-center"> 
          <div className="flex gap-2">
            <Heart fill="white"/>
            <button onClick={()=>(likeProfile(login))}> Like Profile</button>
          </div>
          <Link to={url}>
            <div className="flex gap-2"> 
              
                <Eye />
              <button>View on Github</button>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div  className="flex gap-1">
          <MapPin />{location}
        </div>
       {twitter_username &&<Link to={`https://twitter.com/${twitter_username}`}>
          <div className="flex gap-1">
            <Twitter /> @{twitter_username}
          </div>
        </Link>}
        <div className="flex flex-col  ">
          <p className="opacity-65  text-xs">member since</p>
          <p>{created_at}</p>
        </div>
        <div className="flex flex-col -gap-1 ">
          <p className="opacity-65  text-sm">username</p>
          <p>{login}</p>
         
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex  gap-3 ">
          <div className="flex gap-1">
          <UserCheck /> Followers: {followers}
          </div>
          <div className="flex gap-1">
          <User /> Followings: {following}
          </div>
        </div>
  
        <div className="flex gap-3">
          <div className="flex gap-1">
          <File/> Public Repos: {public_repos}
          </div>
          <div className="flex gap-1">
          <FileHeart />
           Public gists: {public_gists}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile