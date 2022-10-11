import Button from '../Button/Button'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
return(
    <nav style={{ display: 'flex', justifyContent: 'space-around', backgroundColor:'pink'}}>
        <div>
           <h2>Ambos Sidd</h2>
        </div>
        <div style={{ display: 'flex', justifyContent:' space-around', textDecoration:'none', listStyleType:'none'}}>
            <Button label={'Productos'} action={()=> console.log('Productos')}/>
            <Button label={'Nosotros'} action={()=> console.log('Nosotros')}/>
            <Button label={'Contacto'} action={()=> console.log('Contacto')}/>
        </div>
        <div>
         <CartWidget/>
        </div>
    </nav>
)
}

export default Navbar