import { useState, useEffect } from "react"
import { getProducto} from "../../asyncMock"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    useEffect (() => {
        getProducto('1').then(producto =>{
            setProducto(producto)
        })
    },[])
            
 console.log(producto)

    return(
        <div>
            <h3>Detalle del producto</h3>
            <h2> {producto.titulo}</h2>
            <h3>{producto.categoria}</h3>
            <h3>{producto.precio}</h3>
        </div>
    )
}

export default ItemDetailContainer