import { useState, useEffect } from "react"
/* import { getProductoById} from "../../asyncMock" */
import { useParams } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../Service/firebase'


const ItemDetailContainer = (setCart) => {
    const [producto, setProducto] = useState ({})
    const [loading, setLoading] = useState(true)
    const { productoId } = useParams()

    
    useEffect (() => {

        const docRef = doc(db, 'productos', productoId)

        getDoc(docRef).then(doc => {
            const data = doc.data()
            const productAdapted = { id: doc.id, ...data}
            setProducto(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        /* getProductoById(productoId).then(response =>{
            setProducto(response)
        }).finally(() =>{
            setLoading(false)
        }) */
    },[productoId])
            
 console.log(producto)

 if(loading) {
    return <h1>Cargando...</h1>
 }

    return(
        <div className='ItemDetailContainer'>
                       <ItemDetail  {...producto} setCart={setCart}/>
        </div>
    )
}

export default ItemDetailContainer