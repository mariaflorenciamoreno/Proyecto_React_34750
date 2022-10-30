import { useState, useEffect } from 'react'
/* import { getProductos, getProductosByCategory } from '../../asyncMock' */
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../Service/firebase'
import { NotificationContext } from '../../Notificacion/Notificacion'
import { useContext } from 'react'


const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState(true)
    const { setNotification } = useContext(NotificationContext)
    const { categoryId } = useParams()
    
    useEffect(() =>{
        setLoading(true)
        const collectionRef = categoryId 
           ? query(collection(db, 'productos'), where('categoria', '==', categoryId ))
           : collection (db, 'productos')

        getDocs(collectionRef).then (response => {
            console.log(response)

            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                console.log(data)
                return { id: doc.id, ...data}
            })
            setProductos(productsAdapted)
        })
        .catch(error => {
            setNotification('error' , 'No se pueden obtener los productos')
        })
        .finally (() => {
            setLoading(false)
        })
        /* const asyncFunction = categoryId ? getProductosByCategory : getProductos
         */
      /*   asyncFunction(categoryId).then(response => {
            setProductos(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })   */
    }, [categoryId])
 /*    
    useEffect(() => {
        setTimeout(() => {
            setTitle('Cambio el titulo')
        }, 4000)
    }, [])
 */
    if(loading && true) {
        return <h1>Cargando productos...</h1>
    }
    return ( 
        <div onClick={() => console.log('click en itemlistcontainer')}>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            { productos.length > 0 && <ItemList products={productos} /> }
        </div>
    )
}
export default ItemListContainer