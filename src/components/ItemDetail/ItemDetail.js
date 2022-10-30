import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext'
import { NotificationContext } from '../../Notificacion/Notificacion'

const ItemDetail = ({ id, titulo, img, categoria, descripcion, precio, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)
    const { addItem } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
    const productToAdd = {
            id, titulo, precio, quantity
        }
        addItem(productToAdd)
        setNotification('success', `Se agrego correctamente ${quantity} ${titulo}`)
    }
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {titulo}
                    </h2>
            </header>
            <picture>
                <img src={img} alt={titulo} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {categoria}
                </p>
                <p className="Info">
                    Descripción: {descripcion}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
            </section>           
                    <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                        ) : (
                            <Link to='/cart' className='option' >Finalizar compra</Link>
                        )
                    }
                    </footer>
        </article>
        )
    }
    export default ItemDetail