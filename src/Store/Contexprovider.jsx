import React, { useEffect, useState } from 'react'
const contexi=React.createContext({
setval:()=>{},
change:()=>{}
});
export default contexi

let data=[];

export function Contexprovider({children}) {  
  let [val,setval]=useState(0);
  let[arr,setarr]=useState([]);
  const updatearr=async ()=>{
    let temp=await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    // let  temp=await fetch("https://pokeapi.co/api/v2/pokemon/2/");  
    temp= await temp.json();
    data=temp.results;
    setarr(data.slice(0,25));
   };
   const change=(v)=>{
    if(v.trim().length===0){
     setarr(data.slice(0,25))
    }else{
     let d=data.filter((vi)=>vi.name.toLowerCase().includes(v.trim().toLowerCase()));
     setarr(d)
   }
};

   useEffect(()=>{
    // console.log("runnung effect")
    updatearr();   
},[]);

 return (
  <contexi.Provider value={{ok:val,setval,arr,setarr,change}}>
    {
children
    }
    </contexi.Provider>
    )
}

