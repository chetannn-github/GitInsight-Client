import {Compass, Github, Heart, House, LogOut} from 'lucide-react'
import {Link} from "react-router-dom"

const Navlink = () => {
  return (
    <div  className='relative flex flex-col items-center pt-3 gap-6 '>
      <Link to={"/"}><Github /></Link>
      
      <Link to={"/explore"}><Compass /></Link>
      <Link to={"/notifications"}><Heart fill='white'/></Link>
      <Link> <LogOut /></Link>
      
      
     

      
      
      

    </div>
  )
}

export default Navlink