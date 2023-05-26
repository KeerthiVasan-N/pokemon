import React, { useContext } from 'react'
import contexi from './Store/Contexprovider'
import Card from './Card';
import "./main.css"
import { Link } from 'react-router-dom';
export default function Main() {
   let obj=useContext(contexi);
  //  console.log(obj.arr)
   return (

    <main className='container'>
       {/* <Card name="hjvh" id="1"/>
       <Card name="hjvh" id="2"/>
       <Card name="hjvh" id="3"/>
       <Card name="hjvh" id="5"/> */}
      
     {
       obj.arr.map((itm)=>{
           let id="";
           let len=itm.url.length-2;
          for(let j=len;j>=0;j--){
            if(itm.url[j]==="/"){break}else{
              id=itm.url[j]+id
            }
          }
          // console.log(itm)
          return <Link  key={id} to={`pokemon/${id}/${itm.name}`}> <Card name={itm.name} id={id} /></Link>

       })

     }      
    </main>
  

  )
}
