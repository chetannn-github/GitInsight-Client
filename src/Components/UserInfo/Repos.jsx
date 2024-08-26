import Repo from './Repo'

const Repos = ({repos}) => {
 
  return (
    <div className='min-h-fit relative w-full  '>
      {repos?.map((repo)=>(
        <Repo  key={repo.id} repo={repo}/>
      ))}
    </div>
  )
}

export default Repos