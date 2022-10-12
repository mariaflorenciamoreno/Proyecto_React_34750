import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
return(
    <nav style={{ display: 'flex', justifyContent: 'space-around', backgroundColor:'pink'}}>
        <div>
           <h2>Ambos Sidd</h2>
        </div>
        <div style={{ display: 'flex', justifyContent:' space-between', textDecoration:'none', listStyleType:'none'}}>
            <Link to={`/categoria/ambos`}>Ambos</Link>
            <Link to={`/categoria/chaquetas`}>Chaquetas</Link>
            <Link to={`/categoria/cofias`}>Cofias</Link>
        </div>
        <div>
         <CartWidget/>
        </div>
    </nav>
)
}

export default Navbar