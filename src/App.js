import { BrowserRouter,Routes, Route } from 'react-router-dom';
import FirstPage from './components/firstpage/FirstPage';
import Moves from './components/firstpage/Moves';
import Movedetail from './movedetails/Movedetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
       <Route path='/moves' element={<Moves />}>
       </Route>
      <Route path='/moves/movedetail' element={<Movedetail />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
