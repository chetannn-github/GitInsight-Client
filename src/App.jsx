import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Auth from "./Pages/Auth"
import Explore from "./Pages/Explore"
import Notifications from "./Pages/Notifications"
import { Toaster } from "react-hot-toast"



function App() {
  
  return (
  <div className="relative h-full">
   <Toaster className="z-50"  position="top-center"/>
  <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}></Route>
      <Route path="auth" element={<Auth/>}></Route>
      <Route path="/explore" element={<Explore/>}></Route>
      <Route path="/notifications" element={<Notifications/>}></Route>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
