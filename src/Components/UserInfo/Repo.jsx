import { Copy, GitFork, Star } from "lucide-react"
import {Link} from "react-router-dom"
import { convertDate } from "../../utils/dateConvertor";
import {toast} from "react-hot-toast"

const Repo = ({repo}) => {
  let {name , description , forks_count ,stargazers_count ,clone_url , language,created_at,svn_url} = repo;
  created_at = convertDate(created_at);

  let handleCloneUrl =async ()=>{
   await navigator.clipboard.writeText(clone_url);
   toast.success('Copied to clipboard!',{icon: '✅',});
   console.log("copy ho gya hh ")
  }

  return (
    
    <div className="flex flex-col gap-2 p-3 ">
      <div className="flex gap-5 items-center">
        <Link to={svn_url}> <h3 className="text-xl">{name}</h3> </Link>
         <div className="flex items-center gap-2 px-5 py-[4px] rounded-xl bg-red-600 "> <GitFork  size={17}/>{forks_count}</div>
         <div className="flex items-center gap-2 px-5 py-[4px] rounded-xl bg-yellow-600"><Star size={17}/>{stargazers_count}</div>
         <div className="flex items-center gap-2 px-5 py-[4px] rounded-xl bg-green-700 cursor-pointer" onClick={handleCloneUrl}><Copy size={17}/>Clone</div>
      </div>
      
      <p className="text-xs">Released on {created_at}</p>
      <p className="text-xs">{description}</p>


      <div id="lang-imgs" className="flex gap-2  ">
        <img  className= "  h-[50px] w-[50px]" src={`./${language?.toLowerCase()}.svg` } alt={`fav.png`} />
        
      </div>
    </div>
   
  )
}

export default Repo