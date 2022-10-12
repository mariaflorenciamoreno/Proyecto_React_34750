import { Link } from 'react-router-dom'

const Item = ({prod}) =>{
    return(
            <div key={prod.id}>
            <h1>{prod.titulo}</h1>
            <h2>${prod.precio}</h2>
            <Link to={`/detail/${prod.id}`}>Ver detalle</Link>
           </div>
    )
}
export default Item