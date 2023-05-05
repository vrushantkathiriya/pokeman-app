// import './App.css';
import FirstPage from './components/firstpage/FirstPage';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ItemList from './components/Items/ItemList';
import ItemDetail from './components/Items/ItemDetail';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<FirstPage/>}/>
      <Route path='/itemList' element={<ItemList/>}/>
      <Route exact path="/item/:itemId" element={<ItemDetail/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
