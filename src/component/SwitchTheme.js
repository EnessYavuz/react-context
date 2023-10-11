import React from 'react'
import { useContext } from 'react'
import {Context} from "../context/SideContext"
 
function SwitchTheme() {
    const {theme,setTheme} =useContext(Context)
  return (
    <div>
      <h1>Tema : {theme}</h1>
      <button onClick={()=>{setTheme(theme === "blue" ? "red" : "blue" )}}>tema değiştir</button>
    </div>
  )
}

export default SwitchTheme
