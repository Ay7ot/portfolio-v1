import { useState } from "react"
import NavMobile from "./Components/Navbar/NavMobile"
import NavToggled from "./Components/Navbar/NavToggled"
import MainHeader from "./Components/MainHeader"
import About from "./Components/About"
import MySkills from "./Components/MySkills"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import useWindowDimensions from "./windowDimensions"

function App() {

  const { height, width } = useWindowDimensions()
  const [isToggled, setIsToggled] = useState(false)
  const [isLightMode, setIsLightMode] = useState(false)

  function viewNavMobile(){
    setIsToggled(!isToggled)
  }

  function changeTheme(){
    setIsLightMode(!isLightMode)
  }

  return (
    <div className={`min-h-screen ${isLightMode ? 'bg-gray-100' : 'bg-slate-900'} font-poppins pb-10`}>
      {isToggled ? <NavToggled viewNavMobile={viewNavMobile} changeTheme={changeTheme} isLightMode={isLightMode} /> : <NavMobile viewNavMobile={viewNavMobile} width={width} changeTheme={changeTheme} isLightMode={isLightMode}/>}
      {!isToggled && 
        <div className=" px-7 py-5 md:px-[10%] lg:px-[20%]">
          <MainHeader isLightMode={isLightMode}/>
          <About isLightMode={isLightMode} />
          <MySkills isLightMode={isLightMode} />
          <Projects isLightMode={isLightMode} width={width}/>
          <Contact isLightMode={isLightMode} />
        </div>
      }
    </div>
  )
}

export default App
