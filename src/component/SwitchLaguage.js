import React from 'react'
import { useContext } from 'react'
import {Context} from "../context/SideContext"

function SwitchLaguage() {

    const {language,setlanguage} =useContext(Context)
  return (
    <div>
      <h2>dil : {language} </h2>
      <button onClick={()=>{setlanguage(language ==="tr" ? "en" : "tr")}}>dil değiştir</button>
    </div>
  )
}

export default SwitchLaguage
