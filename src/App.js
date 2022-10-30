import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider } from './Notificacion/Notificacion'

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
           <Navbar />
             <Routes>
               <Route path='/' element={<ItemListContainer greeting= {'Bienvenidos, estos son nuestros productos'}/>}/>
               <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categorias'}/>}/>
               <Route path='/detail/:productoId' element={<ItemDetailContainer />}/>
               <Route path='/Cart' element={<Cart />} />
               <Route path='/checkout' element={<Checkout />} />
               
               <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
        </div>
  );
}

export default App;