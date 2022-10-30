import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../Service/firebase'

const Checkout =  () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async () => {
        setLoading(true)
        try {
        const objOrder = {
                 buyer: {
                     name: 'Florencia Moreno',
                     phone: '123456789',
                     email: 'maflorencia.moreno@hotmail.com'
                 },
                 items: cart,
                 total
                }
        console.log(objOrder) 

        const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'productos')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
            const { docs } = productsAddedFromFirestore

            const batch = writeBatch(db)
            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                console.log(`El código de su orden es: ${orderAdded.id}`)
                clearCart()
            } else {
                console.log('Producto sin stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Su orden se esta generando...</h1>
    }

    return (
        <>
            <h1>Checkout</h1>
            <button onClick={createOrder}>Agregar documento</button>

        </>
    )
}

export default Checkout
    