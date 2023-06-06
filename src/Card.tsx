import React from 'react'
import "./card.css"
let v="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
// let vi="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
interface props{
    name:string;
    id:string
}
function Card( propsi:props) {
    let vv=propsi.id+".png"
  return (
    <div className='card'>
     <img src={v+vv} alt={propsi.name} className='pok' />
        
     <p>{propsi.name}</p>
    </div>
  )
}

export default Card