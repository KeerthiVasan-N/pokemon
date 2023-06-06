import React, { useEffect, useState } from "react";
interface contexP {
  arr:any[],
  setarr:React.Dispatch<React.SetStateAction<never[]>>,
  change:(str:string)=>void
};
const contexi=React.createContext<contexP>({
   arr:[],
   setarr:()=>{},
   change:()=>{}
});
export default contexi
let data:any=[];
interface props{
  children:React.ReactNode
}
export const Contexprovider :React.FC<props>= ({children}) => {
  let[arr,setarr]=useState([]);
  const updatearr=async ()=>{

    let temp:any=await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    // let  temp=await fetch("https://pokeapi.co/api/v2/pokemon/2/");  
    temp= await temp.json();
    // console.log(temp,"kjh")
    data=temp?.results!;
    setarr(data.slice(0,25));
   };

   const change=(v:string)=>{
    if(v.trim().length===0){
     setarr(data.slice(0,25))
    }else{
     let d=data.filter((vi:any)=>vi.name.toLowerCase().includes(v.trim().toLowerCase()));
     setarr(d)
   }

  }
   useEffect(()=>{updatearr()},[])

   return(
  <contexi.Provider  value={{arr ,change,setarr}}>
    <div>{children}</div>
  </contexi.Provider>
)

};

 
