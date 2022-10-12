import { useState, useEffect } from "react"
import { getProducto} from "../../asyncMock"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const [loading, setLoading] = useState(true)
    const { productoId } = useParams()

    
    useEffect (() => {
        getProducto(productoId).then(producto =>{
            setProducto(producto)
        }).finally(() =>{
            setLoading(false)
        })
    },[])
            
 console.log(producto)

 if(loading) {
    return <h1>Loading...</h1>
 }

    return(
        <div>
            <h3>Detalle del producto</h3>
            
            <h2> {producto.titulo}</h2>
            <h3>{producto.categoria}</h3>
            <h3>${producto.precio}</h3>
        </div>
    )
}

export default ItemDetailContainer