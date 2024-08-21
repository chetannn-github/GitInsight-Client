

const useAuth = () => {
  let handleAuth = async() =>{
    window.open("http://localhost:5000/api/auth/github/","_self")
  }
  return handleAuth
}

export default useAuth