import {Search} from "lucide-react"

const Searchbar = () => {
  return (
    <div className="flex items-center gap-1 border-2  border-black  bg-slate-930 px-3 py-2">
      <Search />
      <input type='text' className='bg-inherit outline-none px-3 py-1 ' placeholder='enter username'></input>
      <button type="button " className="ml-2 px-5 py-1 ">search</button>
    </div>
  )
}

export default Searchbar