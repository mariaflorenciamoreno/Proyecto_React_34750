import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
         <Navbar />
        <ItemListContainer greeting= {'Bienvenidos, estos son   nuestros productos'}/>
        <ItemDetailContainer />
        </div>
  );
}

export default App;