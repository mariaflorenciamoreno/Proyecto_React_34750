import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar />
         <Routes>
        <Route path='/' element={<ItemListContainer greeting= {'Bienvenidos, estos son   nuestros productos'}/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        <Route path='/detail/:productoId' element={<ItemDetailContainer />}/>
        </Routes>
        </BrowserRouter>
        </div>
  );
}

export default App;