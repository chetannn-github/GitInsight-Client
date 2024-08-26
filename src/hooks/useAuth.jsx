import { BASE_URL } from "../utils/constants";

const useAuth = () => {
  let handleAuth = async() =>{
    window.open(`${BASE_URL}/api/auth/github/`,"_self")
  }
  return handleAuth
}

export default useAuth