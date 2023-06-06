import React ,{useContext, useEffect}from 'react';
import './App.css';
import contexi from './Store/Contexprovider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import  Individual from './Individual';
import  Unknown  from './Unknown';
function App() {
let obj=useContext(contexi)


return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route  path="/"   element={<Home/>}   />
    <Route  path="pokemon/:id/:name"  element={<Individual/>}/>
    <Route  path="*"   element={<Unknown/>}    />
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
