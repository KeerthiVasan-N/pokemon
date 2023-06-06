import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./individual.css"
let api="https://pokeapi.co/api/v2/pokemon/"
// let vi="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
let v="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
interface tt{
  [key:string]:any
}
export default function Individual() {
    let val=useParams()
    let [detail,setdetail]=useState <tt[]>([])
    let [q,setq]=useState(false)
   const updateindividual= async ()=>{
        let pok:any=await fetch(api+val.id)
        // console.log(val.id,pok)
        pok=await pok.json();
        // console.log(pok)
        pok=[pok];
        // console.log(pok)
        setdetail(pok)
        if(pok.length){setq(true)}

      }

  //     if(detail){
  //   console.log(detail[0],"der")
  //   console.log(detail[0]["weight"],"der")
  //  }
useEffect(()=>{
    updateindividual()
},[])
// return <div>{val.id} {val.name}</div>
    // console.log(val)
// let rr=<>
// <p className='ability color_b'>{detail[0]["abilities"][0]["ability"].name}</p> 
//  <p className='ability color_c' >{detail[0]["abilities"][1]["ability"].name}</p>
// </>

// let ri=<>
// <p className='ability color_b'>Super ability</p> 
//  <p className='ability color_c'>Great power</p>
// </>
    return (
   <>
   <div className='back'>
    <h2>{val.name}</h2> 
    <Link to="/" className='home'> Home </Link>
  </div>
<main>
{q&&
<div className='content'>
  <div className='img'>
  <img src={v+val.id+".svg"} alt={val.name} />
  <p>#{val.id}</p>
  </div>
  <div className='sub_grid'>
   {/* <div className='one'>
    <h3>Abilities</h3>
    {detail[0]["abilities"][0]&&detail[0]["abilities"][1]?<>
<p className='ability color_b'>{detail[0]["abilities"][0]["ability"].name}</p> 
 <p className='ability color_c' >{detail[0]["abilities"][1]["ability"].name}</p></>:<>
<p className='ability color_b'>Super ability</p> 
 <p className='ability color_c'>Great power</p>



</> }
   </div> */}
   <div className='one'>
    <h3>Abilities</h3>
    {detail[0]["abilities"][0]?<p className='ability color_b'>{detail[0]["abilities"][0]["ability"].name}</p>:<p className='ability color_b'>Super ability</p> }
    {detail[0]["abilities"][1]? <p className='ability color_c' >{detail[0]["abilities"][1]["ability"].name}</p>:<p className='ability color_c'>Great power</p>
}

   </div>
   <div className='two'>
   <h3 >General</h3>
    <p className='bold' >base_experience:<span className='light'> {detail[0]["base_experience"] }</span></p>
    <p className='bold' >Height:<span className='light'>{detail[0]["height"]}</span></p>
    <p className='bold' >Weight:<span className='light'>{detail[0]["weight"]}</span></p>
    <p className='bold' >Species:<span className='light'>{detail[0]["species"].name}</span></p>
   </div>
   <div className='thr'>
   <h3 className='gap' >type</h3>
   {detail[0]["types"].map((el:any)=>{
     return( <div className='ability gap' key={el["type"]["name"]}>
        {el["type"]["name"]}
      </div>)
   })}
   </div>
   <div className='four'>
   <h3>stats</h3>
    {detail[0]["stats"].slice(2).map((el:any)=>{
      return (<p className='bold' key={el["stat"]["name"]} >
        {el["stat"]["name"]+":"}<span className='light'>{el["base_stat"]}</span>
        </p>
    )})}
   </div>
   </div>
   </div>
   }
   </main>
   </>
  )
}
