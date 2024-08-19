import {useDispatch} from "react-redux"
import { addExplore } from "../redux store/exploreSlice";


const useExplore = () => {
  let dispatch = useDispatch();


  const getPopularRepos = async(language) =>{
        try{
          let repoResult = await fetch(`http://localhost:5000/api/explore/${language}`);
          let repos = await repoResult.json();
          dispatch(addExplore(repos));
          console.log(repos);

        }catch(err){
            console.log("error in explore language api " + err.message);
            
        }

  }

  return getPopularRepos
}

export default useExplore