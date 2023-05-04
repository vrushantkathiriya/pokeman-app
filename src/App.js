
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './components/firstpage/FirstPage';
import YourTeam from './components/yourteam/YourTeam';
import Addteam from './components/addteam/Addteam';
import Pokemondetail from './components/pokemondeatil/Pokemondetail';
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/yourteam' element={<YourTeam/>}/>
        <Route path='/pokemon/:id' element={<Pokemondetail/>} />
        <Route path='/pokemon/addteam/:id' element={<Addteam/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
