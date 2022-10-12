import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()
    
    useEffect(() =>{
        setLoading(true)
        getProductos(categoriaId).then(productos => {
            setProductos(productos)
        }).finally(() =>{
            setLoading(false)
        })
    }, [categoriaId])
    
 console.log(productos)

 if(loading) {
    return <h1>Loading...</h1>
 }

    return(
    <div>
        <h1>{greeting}</h1>
        <ItemList productos={productos} />    
    </div>
    )
}

export default ItemListContainer