import React, { useContext } from 'react'
import  contexi from './Store/Contexprovider'

export default function Footer() {
 let obj=useContext(contexi)

  return (
    <div>Footer
         val= {obj.ok}
          <button onClick={ ()=>{ obj.setval(v=>v+1) }}>click me</button>
    </div>
  )
}
