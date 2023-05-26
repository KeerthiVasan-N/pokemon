import React, { useContext } from "react";
import './header.css';
import contexi from "./Store/Contexprovider";

 const Header=()=>{
    let obj=useContext(contexi)
    return(
        <header className="flex header">
           <h1>pokemon-podex</h1>
           <input onChange={(ev)=>{obj.change(ev.target.value)
           }} type="search" name="" id="" placeholder="Search for any pokemon" />
        </header>
    )
}
export default Header