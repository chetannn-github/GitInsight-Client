import {useDispatch} from "react-redux"
import { changeLanguage, removeExplore } from "../../reduxstore/exploreSlice";

const ExploreHeader = () => {
  let dispatch = useDispatch();

  const handleChangeLanguage  = (language) =>{
    dispatch(removeExplore());
    dispatch(changeLanguage(language))


  }
  return (
    <div className='flex fixed h-[150px] flex-col items-center w-[85%] md:w-1/2 py-7 gap-3 z-50 bg-black'>
        <div>Popular Repositories</div>
        <div className='flex gap-7  bg-black cursor-pointer'>
            <img src="./javascript.svg" onClick={()=>handleChangeLanguage("javascript")} alt="" />
            <img src="./c.svg" alt=""  onClick={()=>handleChangeLanguage("c++")}/>
            <img src="./go.svg" alt="" onClick={()=>handleChangeLanguage("go")}/>
            <img src="./java.svg" alt="" onClick={()=>handleChangeLanguage("java")}/>
          </div>
        
        
    </div>
  )
}

export default ExploreHeader