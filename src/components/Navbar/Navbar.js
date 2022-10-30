import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
return(
    <nav className='NavBar' style={{ display: 'flex', justifyContent: 'space-around'}}>
        <Link to='/'>
           <h2>Ambos Sidd</h2>
        </Link>
        <div className='categories' style={{ display: 'flex', justifyContent:' space-between', textDecoration:'none', listStyleType:'none'}}>
            <NavLink to='/category/Ambos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Ambos</NavLink>
            <NavLink to='/category/Chaquetas' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Chaquetas</NavLink>
            <NavLink to='/category/Cofias' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cofias</NavLink>
        </div>
        <div>
         <CartWidget/>
        </div>
    </nav>
)
}

export default Navbar