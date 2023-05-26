import React from 'react'
import "./card.css"
let v="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
// let vi="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"

function Card( props) {
    let vv=props.id+".png"
  return (
    <div className='card'>
     <img src={v+vv} alt={props.name} className='pok' />
        
     <p>{props.name}</p>
    </div>
  )
}

export default Card