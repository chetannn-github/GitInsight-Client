import { Copy, GitFork, Star } from "lucide-react"


const Repo = () => {
  return (
    <div className="flex flex-col gap-2 p-3 ">
      <div className="flex gap-2 items-center">
         <h3>mern-chat-app</h3>
         <div className="flex gap-2 px-2 py-1 rounded-xl bg-red-600 "> <GitFork />23</div>
         <div className="flex gap-2 px-2 py-1 rounded-xl bg-yellow-600"><Star />23</div>
         <div className="flex gap-2 px-2 py-1 rounded-xl bg-green-700"><Copy />Clone</div>
      </div>
      
      <p className="text-xs">Released on Janurary 25, 2024</p>
      <p className="text-xs">Real-time chat app using socket io </p>


      <div id="lang-imgs" className="flex gap-2  ">
        <img  className= "  h-[50px] w-[50px]" src="./logofav.png" alt="" />
        <img  className= "  h-[50px] w-[50px]" src="./logofav.png" alt="" />
      </div>
    </div>
  )
}

export default Repo