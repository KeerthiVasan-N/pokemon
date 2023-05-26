import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Unknown from './Unknown';
import Individual from './Individual';

function App() {
  return (
  <BrowserRouter>
    <Routes>
    <Route  path="/"   element={<Home/>}   />
    <Route  path="pokemon/:id/:name"  element={<Individual/>}/>
    <Route  path="*"   element={<Unknown/>}    />
    </Routes>
  </BrowserRouter>
);
}
export default App;