import { Copy, GitFork, Star } from "lucide-react"


const Repo = () => {
  return (
    <div className="flex flex-col gap-2 p-3 ">
      <div className="flex gap-5 items-center">
         <h3 className="text-xl">mern-chat-app</h3>
         <div className="flex items-center gap-2 px-5 py-[4px] rounded-xl bg-red-600 "> <GitFork  size={17}/>23</div>
         <div className="flex items-center gap-2 px-5 py-[4px] rounded-xl bg-yellow-600"><Star size={17}/>23</div>
         <div className="flex items-center gap-2 px-5 py-[4px] rounded-xl bg-green-700"><Copy size={17}/>Clone</div>
      </div>
      
      <p className="text-xs">Released on Janurary 25, 2024</p>
      <p className="text-xs">Real-time chat app using socket io </p>


      <div id="lang-imgs" className="flex gap-2  ">
        <img  className= "  h-[50px] w-[50px]" src="./javascript.svg" alt="" />
        <img  className= "  h-[50px] w-[50px]" src="./html.svg" alt="" />
      </div>
    </div>
  )
}

export default Repo